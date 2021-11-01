import React, { useState } from "react";
import "./Expenses.css";
import "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  //const [expenses, setExpensesList] = useState(items);

  const filterYearHandler = (selectedYear) => {
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
    /*
    setExpensesList(filteredExpenses);
    */
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilter={filterYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
