import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });

  let expensesContent = <p>No expenses found.</p>;

  if(filteredExpenses.length === 1) {
    expensesContent = filteredExpenses.map((expense) => (
      [<ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />,<p>Only single Expense here. Please add more...</p>]
    ))
  }
  if(filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
