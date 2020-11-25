import React, { useState } from 'react';

const SimpleHabit = (props) => {

  const [count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1)
  }
  return (
    <li className="habit">
    {/* <span className="habit-name">{name}</span> */}
    <span className="habit-count">{count}</span>
    <button className="habit-button habit-increase" onClick={handleIncrement}>
      <i className="fas fa-plus-square"></i>
    </button>
    {/* <button className="habit-button habit-decrease" onClick={handleDecrement}>
      <i className="fas fa-minus-square"></i>
    </button>
    <button className="habit-button habit-delete" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
    </button> */}
  </li>
  );
}

export default SimpleHabit;