import { Request, Response } from "express";

export const createTransfer = async (req: Request, res: Response) => {
  const { fromAddress, toAddress, amount } = req.body;

  if (!fromAddress || !toAddress || !amount) {
    return res
      .status(400)
      .json({ error: "Missing fromAddress, toAddress, or amount" });
  }

  try {
    console.log("Transfer requested:", fromAddress, toAddress, amount);

    // Mock DB insert
    console.log(
      `Mock insert transfer: ${fromAddress} -> ${toAddress}, amount: ${amount}`
    );

    res.json({ success: true, message: "Transfer endpoint works!" });
  } catch (err) {
    console.error("Transfer error:", err);
    res.status(500).json({ error: "Transfer failed" });
  }
};
