import { Router } from "express";
import {
  depositToVault,
  getVaultBalance,
} from "../controllers/vaultController";

const router = Router();

router.post("/deposit", depositToVault);
router.get("/balance/:userAddress", getVaultBalance);

export default router;
