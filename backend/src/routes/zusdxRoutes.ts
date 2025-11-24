import { Router } from "express";
import { mintZUSDx, getZUSDxBalance } from "../controllers/zusdxController";

const router = Router();

// Mint ZUSDx
router.post("/mint", mintZUSDx);

// Get ZUSDx balance
router.get("/balance/:userAddress", getZUSDxBalance);

export default router;
