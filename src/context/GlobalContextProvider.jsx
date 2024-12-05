import { useEffect, useState } from "react";
import { initialTransactions, updateLocalStorage } from "../utils/utils";
import { MyContext } from "../hooks/custom";

const GlobalContextProvider = ({ children }) => {
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

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default GlobalContextProvider;
