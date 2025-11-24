import { Router } from "express";
import { createTransfer } from "../controllers/transferController";

const router = Router();

router.post("/", createTransfer); // only createTransfer exists

export default router;
