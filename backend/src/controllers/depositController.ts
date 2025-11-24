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

    // Generate zk proof
    const { proof, publicSignals } = await ZkProofService.generateDepositProof(
      amount,
      userAddress
    );

    // Verify proof
    const verified = await ZkProofService.verifyDepositProof(
      proof,
      publicSignals
    );
    if (!verified)
      return res.status(400).json({ error: "Proof verification failed" });

    // Store deposit in DB
    await PostgresClient.query(
      "INSERT INTO deposits(user_address, asset, amount, proof) VALUES($1, $2, $3, $4)",
      [userAddress, asset, amount, JSON.stringify(proof)]
    );

    return res.json({ success: true, proof, publicSignals });
  } catch (err) {
    console.error("Deposit error:", err);
    return res.status(500).json({ error: "Deposit failed" });
  }
};
