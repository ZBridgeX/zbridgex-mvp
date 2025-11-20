import { Router } from "express";
import { mintZUSDx, getZUSDxBalance } from "../controllers/zusdxController";

const router = Router();

router.post("/mint", mintZUSDx);
router.get("/balance/:userAddress", getZUSDxBalance);

export default router;
