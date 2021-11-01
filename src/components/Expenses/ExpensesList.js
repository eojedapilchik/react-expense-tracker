import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = ({ items }) => {
  //console.log(filteredExpenses);
  //** CONDITIONAL CONTENT - FILTER DATA, LOGIC IN THE COMPONENT, BEFORE THE RETURN */
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  //   /console.log(expensesContent);
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
