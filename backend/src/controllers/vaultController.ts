import { Request, Response } from "express";
import { PostgresClient } from "../db/postgresClient";

export const depositToVault = async (req: Request, res: Response) => {
  const { userAddress, asset, amount } = req.body;

  if (!userAddress || !asset || !amount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress, asset, or amount" });
  }

  try {
    console.log("Vault deposit:", userAddress, asset, amount);

    await PostgresClient.query(
      "INSERT INTO vaults(user_address, asset, amount) VALUES($1, $2, $3)",
      [userAddress, asset, amount]
    );

    res.json({ success: true, message: "Vault deposit successful" });
  } catch (err) {
    console.error("Vault deposit error:", err);
    res.status(500).json({ error: "Vault deposit failed" });
  }
};

export const getVaultBalance = async (req: Request, res: Response) => {
  const { userAddress } = req.params;

  if (!userAddress)
    return res.status(400).json({ error: "Missing userAddress" });

  try {
    const { rows } = await PostgresClient.query(
      "SELECT asset, SUM(amount) as balance FROM vaults WHERE user_address = $1 GROUP BY asset",
      [userAddress]
    );

    res.json({ userAddress, balances: rows });
  } catch (err) {
    console.error("Vault balance error:", err);
    res.status(500).json({ error: "Failed to fetch vault balance" });
  }
};
