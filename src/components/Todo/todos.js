import "./style.css";

function Todos({ task, toggleTask, deleteTodo, editTodo }) {
  return (
    <div>
      <span className={`${task.completed ? "completed" : ""}`}>
        {task.task}
      </span>
      <button onClick={() => toggleTask(task.id)}>Done</button>
      <button onClick={() => editTodo(task.id)}>Edit</button>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  );
}

export default Todos;
