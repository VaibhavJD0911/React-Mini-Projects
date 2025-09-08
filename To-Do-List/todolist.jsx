import { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Enter your task here and press the Add Task button"}
  ]);

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: "New task" }]);
  };

  return (
    <div className="todo-container">
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        <div key={task.id} className="task-row">
          <input defaultValue={task.text} />
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
