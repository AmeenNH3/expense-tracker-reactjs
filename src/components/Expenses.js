import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expenses({ expenses, showChartStatus, onCloseChart, onEditApp }) {
  const [filterYear, setfilterYear] = useState("2022");

  function closeChart() {
    onCloseChart();
  }
  function filterChangeHandler(value) {
    setfilterYear(value);
  }

  function onEditHandlerExpenses(data) {
    onEditApp(data);
    // console.log(data);
  }

  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() == filterYear;
  });

  const expenseComponent = (
    <div className="expenses">
      {filteredExpenses.length === 0 && <p className="no-expenses">No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenseItem, index) => {
          return (
            <ExpenseItem
              onEdit={onEditHandlerExpenses}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
              id={expenseItem.id}
              key={expenseItem.id}
              filterYear={filterYear}
            ></ExpenseItem>
          );
        })}
    </div>
  );

  return (
    <div className="wrapper expense-wrapper">
      {showChartStatus && (
        <ExpenseChart expenses={filteredExpenses} closeChart={closeChart}></ExpenseChart>
      )}
      <ExpensesFilter
        selected={filterYear}
        OnFilterChangeExpenses={filterChangeHandler}
      ></ExpensesFilter>
      {expenseComponent}
    </div>
  );
}
