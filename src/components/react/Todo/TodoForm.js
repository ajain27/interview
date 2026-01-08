import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setvalue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setvalue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="addTodo"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <button type="submit">Add todo!</button>
    </form>
  );
}

export default TodoForm;
