import { Router } from "express";
import {
  depositToVault,
  getVaultBalance,
} from "../controllers/vaultController";

const router = Router();

// Deposit into vault
router.post("/deposit", depositToVault);

// Get vault balance for a user
router.get("/balance/:userAddress", getVaultBalance);

export default router;
