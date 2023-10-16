import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [title, enterTitle] = useState();
    console.log(title)
    
  const titleChangeHandler = (event) => {
    enterTitle(event.target.value);
  };

  const [amount, enterAmount] = useState();
  console.log(amount)

  const amountChangeHandler = (event) => {
    enterAmount(event.target.value);
  };

  const [date, enterDate] = useState();
  console.log(date)

  const dateChangeHandler = (event) => {
    enterDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-10-16" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
