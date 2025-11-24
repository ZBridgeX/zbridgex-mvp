import { Router } from "express";
import { createDeposit } from "../controllers/depositController";

const router = Router();

router.post("/", createDeposit); // only createDeposit exists

export default router;
