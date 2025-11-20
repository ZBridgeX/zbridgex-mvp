import { Request, Response } from "express";

export const depositToVault = async (req: Request, res: Response) => {
  const { userAddress, asset, amount } = req.body;

  if (!userAddress || !asset || !amount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress, asset, or amount" });
  }

  // TODO: integrate zk proof + vault deposit logic
  console.log("Vault deposit:", userAddress, asset, amount);

  res.json({ success: true, message: "Vault deposit endpoint works!" });
};

export const getVaultBalance = async (req: Request, res: Response) => {
  const { userAddress } = req.params;

  if (!userAddress) {
    return res.status(400).json({ error: "Missing userAddress" });
  }

  // TODO: fetch vault balance from DB
  res.json({ userAddress, balance: 1000, assets: ["ZEC", "ETH"] });
};
