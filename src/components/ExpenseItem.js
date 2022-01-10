import "./ExpenseItem.css";
import { useState } from "react";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const date = props.date;
  const amount = props.amount;
  const title = props.title;

  const [showEdit, setshowEdit] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredAmount, setEnteredAmount] = useState(amount);
  const [enteredDate, setEnteredDate] = useState(date.toISOString().substring(0, 10));
  const [enteredId, setEnteredId] = useState("");

  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  // const editedData = {
  //   id:
  // }

  function onEditHandler(e) {
    let id = e.target.parentElement.dataset.id;
    setEnteredId(id);
    setshowEdit((prevState) => {
      return !prevState;
    });
  }

  function onSaveEditHandler() {
    // console.log(Save);

    if (!enteredTitle || !enteredAmount || !enteredDate) {
      alert("Enter data da munda");
      return;
    }

    setshowEdit((prevState) => {
      return !prevState;
    });

    const editedData = {
      id: enteredId,
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onEdit(editedData);
  }

  if (showEdit) {
    return (
      <div data-id={props.id} className="expense-item edit">
        <ion-icon title={false} name="close-outline" onClick={onEditHandler}></ion-icon>
        {/* <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div> */}
        <input
          className="edit-item edit-date"
          type="date"
          placeholder="Date"
          min={`${props.filterYear}-01-01`}
          max={`${props.filterYear}-12-31`}
          onChange={dateChangeHandler}
          value={enteredDate}
        />
        <input
          className="edit-item edit-amount"
          type="number"
          placeholder="Enter Amount"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
        <input
          className="edit-item edit-title"
          type="text"
          placeholder="Enter Title"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
        <button className="edit-save-btn" type="button" onClick={onSaveEditHandler}>
          Save
        </button>
      </div>
    );
  }

  return (
    <div data-id={props.id} className="expense-item">
      <ion-icon title={false} name="pencil-outline" onClick={onEditHandler}></ion-icon>
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
