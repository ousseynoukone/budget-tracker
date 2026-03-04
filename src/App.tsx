import { useState } from 'react'
import './App.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import Filter from './components/Filter'
import { TransactionType, type Transaction } from './model/transaction'

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      title: 'Salaire',
      amount: 2500,
      type: TransactionType.Deposit,
      date: new Date('2024-03-01T09:00'),
    },
    {
      title: 'Loyer',
      amount: 900,
      type: TransactionType.Withdrawal,
      date: new Date('2024-03-03T10:30'),
    },
  ])

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
  }

  return (
    <>

    <Filter value={filter} onChange={setFilter} />
    <Balance transactions={filteredTransactions} />
    <TransactionForm onAddTransaction={handleAddTransaction} />
    <TransactionList transactions={filteredTransactions} />
    </>
  )
}

export default App
