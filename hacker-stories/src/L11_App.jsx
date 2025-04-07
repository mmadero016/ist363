import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete Lab 11", completed: false },
    { id: 2, text: "Review JSX Events and State", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  function markComplete(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ));
  }

  function addTask() {
    if (newTask.trim() === "") return;
    const newItem = {
      id: tasks.length + 1,
      text: newTask,
      completed: false
    };
    setTasks([...tasks, newItem]);
    setNewTask("");
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            • {task.text}{" "}
            {!task.completed && (
              <button onClick={() => markComplete(task.id)}>❌</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
