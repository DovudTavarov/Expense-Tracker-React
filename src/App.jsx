import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses.jsx";
import { TransactionList } from "./components/TransactionList.jsx";
import { AddTransaction } from "./components/AddTransaction.jsx";
import "./App.css";
import { useEffect, useState, createContext } from "react";

export const MyContext = createContext(null);

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let initialTransactions = localStorageTransactions || [];

const updateLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    setTransactions((prevTrans) => {
      return [...prevTrans, transaction];
    });
  };

  useEffect(() => {
    updateLocalStorage(transactions);
  }, [transactions]);

  const value = {
    transactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <>
      <MyContext.Provider value={value}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
