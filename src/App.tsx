import { useEffect, useState } from 'react'
import './App.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import Filter from './components/Filter'
import { TransactionType, type Transaction } from './model/transaction'
import { deleteTransaction, loadTransactions, saveTransactions } from './utils/storage'

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    const storedTransactions = loadTransactions();
    setTransactions(storedTransactions);
  }, []);
    

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all")

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") {
      return true
    }

    if (filter === "income") {
      return transaction.type === TransactionType.Deposit
    }

    if (filter === "expense") {
      return transaction.type === TransactionType.Withdrawal
    }

    return true
  })

  function handleAddTransaction(transaction: Transaction) {
    setTransactions((current) => [...current, transaction])
    saveTransactions(transaction)
  }

  function handleDeleteTransaction(id: string) {
    setTransactions((current) => current.filter(transaction => transaction.id !== id))
    deleteTransaction(id)
  }

  return (
    <>
      <Filter value={filter} onChange={setFilter} />
      <Balance transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={filteredTransactions} onDeleteTransaction={handleDeleteTransaction} />
    </>
  )
}

export default App
