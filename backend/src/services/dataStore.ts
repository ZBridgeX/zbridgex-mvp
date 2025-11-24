interface Deposit {
  userAddress: string;
  asset: string;
  amount: number;
  proof?: any;
}

interface VaultDeposit {
  userAddress: string;
  asset: string;
  amount: number;
}

interface ZUSDxMint {
  userAddress: string;
  collateralAmount: number;
  balance: number;
}

export const deposits: Deposit[] = [];
export const vaults: VaultDeposit[] = [];
export const zusdx: ZUSDxMint[] = [];
