import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      <ExpenseItem
        key={expense.id}
        title={expense.amount}
        date={expense.date}
      />;
    });
  }
};

export default ExpensesList;
