
export const TransactionType = {
  Deposit: "Deposit",
  Withdrawal: "Withdrawal",
} as const;

export type TransactionType =
  typeof TransactionType[keyof typeof TransactionType];

export interface Transaction {
    title: string,
    amount: number,
    type : TransactionType,
    date : Date
}