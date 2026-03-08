import type { Transaction } from "../model/transaction"

export function saveTransactions(transactions: Transaction[]) {
    localStorage.setItem("transactions", JSON.stringify(transactions))
}

export function loadTransactions(): Transaction[] {
    const data = localStorage.getItem("transactions")
    if (!data) {
        return []
    }
    try {
        const parsed = JSON.parse(data) as Transaction[]

        return parsed;

    } catch (error) {
        console.error("Erreur lors du chargement des transactions :", error)
        return []
    }
}