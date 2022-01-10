import { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  const [addExpense, setAddExpense] = useState(true);
  // const [showChart, setShowChart] = useState(false);

  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(enteredData);

    setEnteredTitle("");
    setEnteredAmount(0);
    setEnteredDate("");

    setAddExpense((prevState) => {
      return !prevState;
    });
  }

  function addExpenseClickHandler() {
    setAddExpense((prevState) => {
      return !prevState;
    });
  }

  function showChartClickHandler() {
    props.onShowChart();
  }

  if (addExpense) {
    return (
      <div className="expense-action-container wrapper">
        <div className="expense-action--control">
          <button className="add-expense-button" onClick={addExpenseClickHandler}>
            <ion-icon className="add-expense-icon" name="add-circle-outline"></ion-icon>
            Add Expense
          </button>
          {!props.showChartStatus && (
            <button className="add-expense-button" onClick={showChartClickHandler}>
              <ion-icon className="add-expense-icon" name="stats-chart-outline"></ion-icon>
              Show Chart
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form className="new-expense-form" onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input required type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="new-expense__button" type="submit">
          Add Expense
        </button>
        <button type="button" className="new-expense__button" onClick={addExpenseClickHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}
