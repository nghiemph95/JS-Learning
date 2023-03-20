import "./App.css";
import React from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { uuid } from "uuidv4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

console.log(initialExpenses);

function App() {
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
