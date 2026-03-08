import type { Transaction } from "../model/transaction";

type TransactionListProps = {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
};

export default function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
  if (transactions.length === 0) {
    return (
      <div className="p-5">
        <p className="text-sm text-gray-500">
          Aucune transaction pour l'instant.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h2 className="font-bold my-2"> Liste des transactions</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border text-black border-gray-300 px-3 py-2 text-left">
              Titre
            </th>
            <th className="border text-black border-gray-300 px-3 py-2 text-left">
              Montant
            </th>
            <th className="border text-black border-gray-300 px-3 py-2 text-left">
              Type
            </th>
            <th className="border text-black border-gray-300 px-3 py-2 text-left">
              Date
            </th>

            <th className="border text-black border-gray-300 px-3 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-300 px-3 py-2">
                {transaction.title}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {transaction.amount.toFixed(2)} €
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {transaction.type}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                {transaction.date.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-3 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => onDeleteTransaction(transaction.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

