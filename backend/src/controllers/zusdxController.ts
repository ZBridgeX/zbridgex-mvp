import { Request, Response } from "express";

export const mintZUSDx = async (req: Request, res: Response) => {
  const { userAddress, collateralAmount } = req.body;

  if (!userAddress || !collateralAmount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress or collateralAmount" });
  }

  try {
    console.log("Mint ZUSDx:", userAddress, collateralAmount);

    // Mock DB insert
    console.log(`Mock mint ZUSDx: ${userAddress}, amount: ${collateralAmount}`);

    res.json({ success: true, message: "ZUSDx mint endpoint works!" });
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
    // Mocked balance
    const balance = 500;

    res.json({ userAddress, zusdxBalance: balance });
  } catch (err) {
    console.error("ZUSDx balance error:", err);
    res.status(500).json({ error: "Failed to fetch ZUSDx balance" });
  }
};
