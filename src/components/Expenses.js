import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";

export default function Expenses({ expenses }) {
  return (
    <div className="expenses wrapper">
      {expenses.map((expenseItem, index) => {
        return (
          <ExpenseItem
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
            key={expenseItem.id}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}
