



import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const STORAGE_KEY = "todoListData";

function App() {
  // const [tasks, setTasks] = useState([]);

  // // Load saved tasks from localStorage
  // useEffect(() => {
  //   const saved = localStorage.getItem(STORAGE_KEY);
  //   if (saved) {
  //     setTasks(JSON.parse(saved));
  //   }
  // }, []);

  // // Save tasks to localStorage whenever they change
  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  // }, [tasks]);



  // ✅ Load tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim() };
    setTasks((prev) => [...prev, newTask]);
  };

  // Update existing task
  const updateTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: newText.trim() } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
