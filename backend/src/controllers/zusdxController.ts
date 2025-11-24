import { Request, Response } from "express";
import { PostgresClient } from "../db/postgresClient";

export const mintZUSDx = async (req: Request, res: Response) => {
  const { userAddress, collateralAmount } = req.body;

  if (!userAddress || !collateralAmount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress or collateralAmount" });
  }

  try {
    console.log("Mint ZUSDx:", userAddress, collateralAmount);

    // Record minted ZUSDx in DB
    await PostgresClient.query(
      "INSERT INTO zusdx(user_address, amount) VALUES($1, $2)",
      [userAddress, collateralAmount]
    );

    res.json({ success: true, message: "ZUSDx minted successfully" });
  } catch (err) {
    console.error("ZUSDx mint error:", err);
    res.status(500).json({ error: "ZUSDx minting failed" });
  }
};

export const getZUSDxBalance = async (req: Request, res: Response) => {
  const { userAddress } = req.params;

  if (!userAddress)
    return res.status(400).json({ error: "Missing userAddress" });

  try {
    const { rows } = await PostgresClient.query(
      "SELECT SUM(amount) as balance FROM zusdx WHERE user_address = $1",
      [userAddress]
    );

    res.json({ userAddress, zusdxBalance: rows[0]?.balance || 0 });
  } catch (err) {
    console.error("ZUSDx balance error:", err);
    res.status(500).json({ error: "Failed to fetch ZUSDx balance" });
  }
};
