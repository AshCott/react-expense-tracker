import React from 'react';
import ExpenseItem from './ExpenseItem.js';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expense.title}
        amount={props.expense.amount}
        date={props.expense.date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
