import { TransactionType } from "../model/transaction";
import type { Transaction } from "../model/transaction";

type BalanceProps = {
  transactions: Transaction[];
};

export default function Balance({ transactions }: BalanceProps) {
  const totalIncome = transactions
    .filter((t) => t.type === TransactionType.Deposit)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === TransactionType.Withdrawal)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="border border-gray-300 rounded-lg p-3">
          <p className="text-gray-500">Total revenus</p>
          <p className="text-green-600 font-semibold">
            {totalIncome.toFixed(2)} euros
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3">
          <p className="text-gray-500">Total dépenses</p>
          <p className="text-red-600 font-semibold">
            {totalExpense.toFixed(2)} euros
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-3">
          <p className="text-gray-500">Solde</p>
          <p className="font-semibold">
            {balance.toFixed(2)} euros
          </p>
        </div>
      </div>
    </div>
  );
}

