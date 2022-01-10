import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function newExpense(props) {
  console.log(props);
  function showChartClickHandlerAtNewExpense() {
    props.onShowChartAtApp();
  }
  function saveExpenseDataHandler(data) {
    const expenseData = {
      id: `e${Math.floor(Math.random() * 100000).toString()}`, //Not the best way to do this, works for this project though
      ...data,
    };

    props.OnsaveExpenseDataExpenses(expenseData);
  }
  return (
    <div className="new-expense wrapper">
      <ExpenseForm
        showChartStatus={props.showChartStatus}
        onShowChart={showChartClickHandlerAtNewExpense}
        onSaveExpenseData={saveExpenseDataHandler}
      ></ExpenseForm>
    </div>
  );
}
