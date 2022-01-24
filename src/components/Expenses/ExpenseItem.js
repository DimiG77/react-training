import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react';

//ExpenseItem Function
function ExpenseItem(props) {

  //title = "Value" eg "TV" || setTitle = "Updated Value" eg "Success Add"
  const [title, setTitle] = useState(props.title); 
  console.log('ExpenseItem will be evaluated');

  //Function for the Button
  function clickHandler () {
    setTitle('Success Add');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> 
    </Card>
  );
}

export default ExpenseItem;
