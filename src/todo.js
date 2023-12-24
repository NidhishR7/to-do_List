// TodoList.js

import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask('');
    } else {
      alert('Please enter a task!');
    }
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add new task"
        />
        <button className='addbtn' onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            className={t.completed ? 'completed' : ''}
          >
            <span onClick={() => toggleTaskCompletion(t.id)}>
              {t.text}
            </span>
            
            <button className='donebtn' onClick={() => deleteTask(t.id)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
