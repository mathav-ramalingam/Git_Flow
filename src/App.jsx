import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }

    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task} <button onClick={() => deleteTask(idx)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
      <h1>List</h1>
    </div>
    </div>
    
  );
}

export default App;
