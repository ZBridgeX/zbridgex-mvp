import { Request, Response } from "express";
import { ZkProofService } from "../services/zkProofService";
import { PostgresClient } from "../db/postgresClient";

export const createDeposit = async (req: Request, res: Response) => {
  const { userAddress, amount, asset } = req.body;

  if (!userAddress || !amount || !asset) {
    return res
      .status(400)
      .json({ error: "Missing userAddress, amount or asset" });
  }

  try {
    console.log("Deposit request:", userAddress, amount, asset);

    // Mock zk proof
    const { proof, publicSignals } = await ZkProofService.generateDepositProof(
      amount,
      userAddress
    );

    // Mock verification
    const verified = await ZkProofService.verifyDepositProof(
      proof,
      publicSignals
    );

    if (!verified)
      return res.status(400).json({ error: "Proof verification failed" });

    // Mock DB insert
    console.log(
      `Mock insert into deposits: ${userAddress}, ${asset}, ${amount}`
    );

    return res.json({ success: true, proof, publicSignals });
  } catch (err) {
    console.error("Deposit error:", err);
    return res.status(500).json({ error: "Deposit failed" });
  }
};
