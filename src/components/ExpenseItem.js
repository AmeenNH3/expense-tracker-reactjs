import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const date = props.date;
  const amount = props.amount;
  const title = props.title;
  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
