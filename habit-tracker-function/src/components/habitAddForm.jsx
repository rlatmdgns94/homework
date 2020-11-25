import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) =>{
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = " ";
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input type="text" ref={inputRef} className="add-input" placeholder="habit"/>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
