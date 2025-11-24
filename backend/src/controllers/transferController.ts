import { Request, Response } from "express";
import { PostgresClient } from "../db/postgresClient";

export const createTransfer = async (req: Request, res: Response) => {
  const { fromAddress, toAddress, amount } = req.body;

  if (!fromAddress || !toAddress || !amount) {
    return res
      .status(400)
      .json({ error: "Missing fromAddress, toAddress, or amount" });
  }

  try {
    console.log("Transfer requested:", fromAddress, toAddress, amount);

    // Record transfer in DB (POC)
    await PostgresClient.query(
      "INSERT INTO transfers(from_address, to_address, amount) VALUES($1, $2, $3)",
      [fromAddress, toAddress, amount]
    );

    res.json({ success: true, message: "Transfer recorded" });
  } catch (err) {
    console.error("Transfer error:", err);
    res.status(500).json({ error: "Transfer failed" });
  }
};
