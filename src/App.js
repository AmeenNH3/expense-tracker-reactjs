import { useState } from "react";
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { initialExpensesData as data } from "./data/initialdata";
function App() {
  const initialExpensesData = data;
  const [expenses, setExpenses] = useState(initialExpensesData);
  const [showChart, setShowChart] = useState(false);

  function SaveExpenseDataExpensesHandler(data) {
    setExpenses((prevState) => {
      return [...prevState, data];
    });
  }

  function onShowChartHandlerAtApp() {
    setShowChart((prevState) => {
      return !prevState;
    });
  }
  function onCloseChartHandlerAtApp() {
    setShowChart((prevState) => {
      return !prevState;
    });
  }

  function onEditApp(data) {
    console.log(data.id);

    const editedExpenses = expenses.map((expense) => {
      console.log(expense);
      if (expense.id == data.id) {
        return data;
      }
      return expense;
    });
    // console.log(editedExpenses);
    // setExpenses((prevState) => {
    //   prevState.map((item) => {
    //     console.log(item.id);
    //     if (item.id == data.id) {
    //       return data;
    //     }
    //     return item;
    //   });
    // });

    setExpenses(editedExpenses);
  }

  return (
    <div className="main-container">
      <Header></Header>
      <NewExpense
        showChartStatus={showChart}
        onShowChartAtApp={onShowChartHandlerAtApp}
        OnsaveExpenseDataExpenses={SaveExpenseDataExpensesHandler}
      ></NewExpense>
      <Expenses
        showChartStatus={showChart}
        onCloseChart={onCloseChartHandlerAtApp}
        expenses={expenses}
        onEditApp={onEditApp}
      ></Expenses>
    </div>
  );
}

export default App;
