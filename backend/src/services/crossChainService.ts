// src/services/crossChainService.ts
import { logger } from "../utils/logger";

interface Transfer {
  from: string;
  toChain: string;
  amount: number;
  proof: string;
}

const transfers: Transfer[] = [];

/**
 * Simulate a cross-chain transfer
 */
export const transferToChain = (
  from: string,
  toChain: string,
  amount: number
) => {
  const proof = `dummy-proof-${Math.floor(Math.random() * 100000)}`;
  const transfer = { from, toChain, amount, proof };
  transfers.push(transfer);
  logger.info(
    `User ${from} transferred ${amount} ZUSDx to ${toChain} with proof ${proof}`
  );
  return transfer;
};

export const getTransfers = (user: string) => {
  return transfers.filter((t) => t.from === user);
};
