import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    if (storedTasks.length === 0) {
      fetch('https://dummyjson.com/todos?limit=10')
        .then(res => res.json())
        .then(data => {
          const initialTasks = data.todos.map(todo => ({
            id: todo.id,
            text: todo.todo,
            completed: todo.completed,
          }));
          setTasks(initialTasks);
          localStorage.setItem('todos', JSON.stringify(initialTasks));
        });
    } else {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = text => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodo addTask={addTask} />
      <Filter setFilter={setFilter} />
      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
