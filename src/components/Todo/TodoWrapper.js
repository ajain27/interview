import TodoForm from "./TodoForm";
import Todos from "./todos";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import { useState } from "react";
import EditTodo from "./EditTodo";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEdited: false },
    ]);
    console.log(todos);
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    console.log("deleted");
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEdited: !todo.isEdited } : todo
      )
    );
  };

  return (
    <div className="todo_wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEdited ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todos
            task={todo}
            key={index}
            toggleTask={toggleTask}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
