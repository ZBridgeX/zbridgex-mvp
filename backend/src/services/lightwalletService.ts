// src/services/lightwalletService.ts
import { logger } from "../utils/logger";

export const createShieldedAddress = (user: string) => {
  const address = `zs1dummy${Math.floor(Math.random() * 1000000)}`;
  logger.info(`Created shielded address ${address} for user ${user}`);
  return address;
};

export const shieldedDeposit = (user: string, amount: number) => {
  const txId = `tx-${Math.floor(Math.random() * 1000000)}`;
  logger.info(
    `User ${user} deposited ${amount} ZEC to shielded pool (tx: ${txId})`
  );
  return { txId, amount };
};
