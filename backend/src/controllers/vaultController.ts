import { Request, Response } from "express";

export const depositToVault = async (req: Request, res: Response) => {
  const { userAddress, asset, amount } = req.body;

  if (!userAddress || !asset || !amount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress, asset, or amount" });
  }

  try {
    console.log("Vault deposit:", userAddress, asset, amount);

    // Mock DB insert
    console.log(`Mock vault deposit: ${userAddress}, ${asset}, ${amount}`);

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
    // Mocked balances
    const balances = [
      { asset: "ETH", balance: 100 },
      { asset: "ZEC", balance: 50 },
    ];

    res.json({ userAddress, balances });
  } catch (err) {
    console.error("Vault balance error:", err);
    res.status(500).json({ error: "Failed to fetch vault balance" });
  }
};
