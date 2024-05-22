import React from 'react'

const Analytics = ({allTransaction}) => {
    const totalTransactions = allTransaction.length
    const totalIncomeTransactions=allTransaction.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions=allTransaction.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent =(totalIncomeTransactions/totalTransactions) * 100
    const totalExpensePercent =(totalExpenseTransactions/totalTransactions) * 100

  return (
    <div>
        <h1>Analytics</h1>
    </div>
  )
}

export default Analytics