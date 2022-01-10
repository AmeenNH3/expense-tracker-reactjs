import { useState } from "react";
import Header from "./components/Header";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const initialExpensesData = [
  {
    id: "e16310",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e14610", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e10310",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e13410",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e11210",
    title: "New Bike",
    amount: 6000,
    date: new Date(2021, 9, 15),
  },
  {
    id: "e12566",
    title: "New Table",
    amount: 300,
    date: new Date(2022, 9, 21),
  },
  {
    id: "e13527",
    title: "New Phone",
    amount: 800,
    date: new Date(2022, 11, 21),
  },

  {
    id: "e15210",
    title: "New Bike",
    amount: 6000,
    date: new Date(2022, 9, 15),
  },
  {
    id: "e18566",
    title: "New Table",
    amount: 300,
    date: new Date(2022, 9, 21),
  },
  {
    id: "e16527",
    title: "New Phone",
    amount: 800,
    date: new Date(2022, 11, 21),
  },
];
let showChart = true;
function App() {
  // let filteredExpenses = [];

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

  return (
    <div className="main-container">
      <Header></Header>
      <NewExpense
        onShowChartAtApp={onShowChartHandlerAtApp}
        OnsaveExpenseDataExpenses={SaveExpenseDataExpensesHandler}
      ></NewExpense>
      <Expenses
        showChartStatus={showChart}
        onCloseChart={onCloseChartHandlerAtApp}
        expenses={expenses}
      ></Expenses>
    </div>
  );
}

export default App;
