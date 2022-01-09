import Header from "./components/Header";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New Bike",
      amount: 6000,
      date: new Date(2021, 9, 15),
    },
    {
      id: "e6",
      title: "New Table",
      amount: 300,
      date: new Date(2021, 9, 21),
    },
    {
      id: "e7",
      title: "New Phone",
      amount: 800,
      date: new Date(2021, 11, 21),
    },
  ];
  return (
    <div className="main-container">
      <Header></Header>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
