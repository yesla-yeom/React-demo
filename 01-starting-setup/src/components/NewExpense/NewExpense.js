import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExenpse = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // 프롭스 전달은 상향식 (자식컴포넌트에서 부모컴포넌트로) && 이게 App.js로 전달
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExenpse;
