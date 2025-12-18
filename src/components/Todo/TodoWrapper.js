import TodoForm from "./TodoForm";
import Todos from "./todos";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import { useState } from "react";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
    console.log(todos);
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo_wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todos task={todo} key={index} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default TodoWrapper;
