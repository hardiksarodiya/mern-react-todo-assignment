import React from 'react';

export default function TodoItem({ task, toggleComplete, deleteTask }) {
  return (
    <li>
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => toggleComplete(task.id)}
        style={{ cursor: 'pointer' }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
