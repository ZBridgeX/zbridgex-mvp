import { Request, Response } from "express";

export const createTransfer = async (req: Request, res: Response) => {
  const { fromAddress, toAddress, amount } = req.body;

  if (!fromAddress || !toAddress || !amount) {
    return res
      .status(400)
      .json({ error: "Missing fromAddress, toAddress, or amount" });
  }

  // TODO: integrate zk cross-chain transfer logic
  console.log("Transfer requested:", fromAddress, toAddress, amount);

  res.json({ success: true, message: "Transfer endpoint works!" });
};
