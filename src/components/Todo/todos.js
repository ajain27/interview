import { useState } from "react";
import "./style.css";

function Todos({ task, toggleTask }) {
  const [completed, setcompleted] = useState(false);

  return (
    <div>
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.task}
      </p>
    </div>
  );
}

export default Todos;
