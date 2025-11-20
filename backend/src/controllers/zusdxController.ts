import { Request, Response } from "express";

export const mintZUSDx = async (req: Request, res: Response) => {
  const { userAddress, collateralAmount } = req.body;

  if (!userAddress || !collateralAmount) {
    return res
      .status(400)
      .json({ error: "Missing userAddress or collateralAmount" });
  }

  // TODO: integrate ZUSDx minting logic
  console.log("Mint ZUSDx:", userAddress, collateralAmount);

  res.json({ success: true, message: "ZUSDx mint endpoint works!" });
};

export const getZUSDxBalance = async (req: Request, res: Response) => {
  const { userAddress } = req.params;

  if (!userAddress) {
    return res.status(400).json({ error: "Missing userAddress" });
  }

  // TODO: fetch ZUSDx balance from DB
  res.json({ userAddress, zusdxBalance: 500 });
};
