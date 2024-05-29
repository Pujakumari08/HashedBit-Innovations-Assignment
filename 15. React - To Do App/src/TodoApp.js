import React, { useState, useEffect } from 'react';
import  './App.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() && !tasks.includes(task.trim())) {
      const newTasks = [...tasks, task.trim()].sort();
      setTasks(newTasks);
      setTask('');
    }
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((t) => t !== taskToDelete);
    setTasks(newTasks);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div id="root">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          id="task-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task"
        />
        <button onClick={addTask} disabled={!task.trim()}>Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <TodoItem key={index} task={t} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ task, deleteTask }) => (
  <li>
    {task} <button onClick={() => deleteTask(task)}>Delete</button>
  </li>
);

export default TodoApp;


