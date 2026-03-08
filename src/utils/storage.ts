import type { Transaction } from "../model/transaction"

export function saveTransactions(transaction: Transaction) {
    const transactions = loadTransactions();
    localStorage.setItem("transactions", JSON.stringify([...transactions, transaction]))
}

export function loadTransactions(): Transaction[] {
    const data = localStorage.getItem("transactions")
    if (!data) {
        return []
    }
    try {
        const parsed = JSON.parse(data) as Transaction[]

        return parsed.map(transaction => ({
            ...transaction,
            date: new Date(transaction.date)
        }));

    } catch (error) {
        console.error("Erreur lors du chargement des transactions :", error)
        return []
    }
}

export function clearTransactions() {
    localStorage.removeItem("transactions")
}

export function deleteTransaction(id: string) {
    const transactions = loadTransactions();
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
}