import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import depositRoutes from "./routes/depositRoutes";
import transferRoutes from "./routes/transferRoutes";
import vaultRoutes from "./routes/vaultRoutes";
import zusdxRoutes from "./routes/zusdxRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Original routes
app.use("/api/deposits", depositRoutes);
app.use("/api/transfers", transferRoutes);

// Aliases for frontend-friendly endpoints
app.use("/api/vault", vaultRoutes); // maps to /api/vaults/...
app.use("/api/zusdx", zusdxRoutes); // maps to /api/mint-zusdx/...

app.get("/", (req, res) => {
  res.send("ZBridgeX Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
