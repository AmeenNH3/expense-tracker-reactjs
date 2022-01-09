import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filterYear, setfilterYear] = useState("2022");

  function filterChangeHandler(value) {
    setfilterYear(value);
  }

  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() == filterYear;
  });

  return (
    <div className="wrapper expense-wrapper">
      <ExpensesFilter
        selected={filterYear}
        OnFilterChangeExpenses={filterChangeHandler}
      ></ExpensesFilter>
      <div className="expenses">
        {filteredExpenses.length === 0 && <p className="no-expenses">No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expenseItem, index) => {
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
    </div>
  );
}
