import React, { useState } from "react";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export const ExpensesList = ({ items }) => {
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

  //console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilter={filterYearHandler}
          selectedYear={filteredYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
        {/* <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem> */}
        {/* <ExpenseItem {...items[1]}></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem> */}
        {/* <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};
