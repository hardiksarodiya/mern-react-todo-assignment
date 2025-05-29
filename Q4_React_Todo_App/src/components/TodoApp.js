import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo onAdd={handleAdd} />
      <Filter setFilter={setFilter} />
      <TodoList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}
