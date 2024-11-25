import React, { useContext } from "react";
import { Transaction } from "./Transaction.jsx";
import { MyContext } from "../App.jsx";

export const TransactionList = () => {
  const { transactions } = useContext(MyContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
