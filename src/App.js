import ExpensesData from "./components/Expenses/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseForm from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Chair",
      amount: 94.12,
      date: new Date(2022, 0, 23),
    },

    {
      id: "e2",
      title: "Gaming Monitor",
      amount: 250.23,
      date: new Date(2022, 1, 23),
    },

    {
      id: "e3",
      title: "Car Insurance",
      amount: 100.12,
      date: new Date(2022, 1, 22),
    },

    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 402.32,
      date: new Date(2022, 5, 23),
    },
  ];

  return (
    <div>
      <NewExpense />
      <ExpensesData items = {expenses} />
    </div>
  );
}

export default App;
