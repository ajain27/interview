import React, { useState } from "react";

function EditTodo({ editTodo, task }) {
  const [value, setvalue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setvalue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="editTodo"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <button type="submit">update todo!</button>
    </form>
  );
}

export default EditTodo;
