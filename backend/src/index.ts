// backend/src/index.ts
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

// Routes
import depositRoutes from "./routes/depositRoutes";
import transferRoutes from "./routes/transferRoutes";
import vaultRoutes from "./routes/vaultRoutes";
import zusdxRoutes from "./routes/zusdxRoutes";

// DB placeholder (or Postgres connection)
import { PostgresClient } from "./db/postgresClient";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/deposits", depositRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/vaults", vaultRoutes);
app.use("/api/zusdx", zusdxRoutes);

// Health check endpoint
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", message: "Backend is running!" });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Backend server running on http://localhost:${PORT}`);

  try {
    await PostgresClient.connect(); // optional if using DB
    console.log("Connected to Postgres database");
  } catch (err) {
    console.warn("DB connection failed, continuing with in-memory store");
  }
});
