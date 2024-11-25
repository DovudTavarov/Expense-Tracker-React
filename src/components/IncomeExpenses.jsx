import { useContext } from "react";
import { MyContext } from "../App";

export const IncomeExpenses = () => {
  const { transactions } = useContext(MyContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const totalIncome = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const totalExpense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${totalExpense}</p>
      </div>
    </div>
  );
};
