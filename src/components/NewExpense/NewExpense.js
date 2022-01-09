import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function newExpense() {
  return (
    <div className="new-expense wrapper">
      <ExpenseForm></ExpenseForm>
    </div>
  );
}
