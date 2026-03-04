import { useState } from 'react'
import './App.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
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

  function handleAddTransaction(transaction: Transaction) {
    setTransactions((current) => [...current, transaction])
  }

  return (
    <>

    <TransactionForm onAddTransaction={handleAddTransaction} />
    <TransactionList transactions={transactions} />
    </>
  )
}

export default App
