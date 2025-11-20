import { Request, Response } from "express";

export const createDeposit = async (req: Request, res: Response) => {
  const { userAddress, amount, asset } = req.body;

  if (!userAddress || !amount || !asset) {
    return res
      .status(400)
      .json({ error: "Missing userAddress, amount or asset" });
  }

  console.log("Deposit request:", userAddress, amount, asset);

  res.json({ success: true, message: "Deposit endpoint works!" });
};
