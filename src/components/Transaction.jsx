import React, { useContext } from "react";
import { getSignWithAmount } from "../utils/helpers";
import { MyContext } from "../hooks/custom";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(MyContext);
  const customClass = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={customClass}>
      {transaction.text} <span>{getSignWithAmount(transaction.amount)}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
