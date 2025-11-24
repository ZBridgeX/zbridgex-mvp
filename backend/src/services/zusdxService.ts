interface ZUSDxRecord {
  user: string;
  balance: number;
}

const zusdxBalances: ZUSDxRecord[] = [];

export const mintZUSDx = async (user: string, amount: number) => {
  let userRecord = zusdxBalances.find((u) => u.user === user);
  if (!userRecord) {
    userRecord = { user, balance: 0 };
    zusdxBalances.push(userRecord);
  }
  userRecord.balance += amount;
  console.log(`Minted ${amount} ZUSDx to ${user}`);
  return amount;
};

export const transferZUSDx = async (
  from: string,
  to: string,
  amount: number
) => {
  const sender = zusdxBalances.find((u) => u.user === from);
  if (!sender || sender.balance < amount)
    throw new Error("Insufficient balance");

  let receiver = zusdxBalances.find((u) => u.user === to);
  if (!receiver) {
    receiver = { user: to, balance: 0 };
    zusdxBalances.push(receiver);
  }

  sender.balance -= amount;
  receiver.balance += amount;

  console.log(`Transferred ${amount} ZUSDx from ${from} to ${to}`);
  return true;
};

export const getZUSDxBalance = async (user: string) => {
  const userRecord = zusdxBalances.find((u) => u.user === user);
  return userRecord?.balance || 0;
};
