import { groth16 } from "snarkjs";
import path from "path";

export class ZkProofService {
  static async generateDepositProof(amount: number, user: string) {
    // Paths to compiled circuit and keys (you need to compile Circom circuit first)
    const circuitWasm = path.join(__dirname, "../../zk-circuits/deposit.wasm");
    const zkey = path.join(__dirname, "../../zk-circuits/deposit.zkey");

    const input = { amount, user };

    const { proof, publicSignals } = await groth16.fullProve(
      input,
      circuitWasm,
      zkey
    );
    return { proof, publicSignals };
  }

  static async verifyDepositProof(proof: any, publicSignals: any) {
    const verificationKey = path.join(
      __dirname,
      "../../zk-circuits/verification_key.json"
    );
    const verified = await groth16.verify(
      require(verificationKey),
      publicSignals,
      proof
    );
    return verified;
  }
}
