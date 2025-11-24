interface VaultRecord {
  user: string;
  asset: string;
  amount: number;
}

const vaults: VaultRecord[] = [];

export const depositToVault = async (
  user: string,
  asset: string,
  amount: number
) => {
  vaults.push({ user, asset, amount });
  console.log(`Vault deposit recorded: ${user} deposited ${amount} ${asset}`);
  return true;
};

export const getVaultBalance = async (user: string) => {
  const userVaults = vaults.filter((v) => v.user === user);
  const balanceMap = userVaults.reduce((acc, v) => {
    acc[v.asset] = (acc[v.asset] || 0) + v.amount;
    return acc;
  }, {} as Record<string, number>);
  return balanceMap;
};
