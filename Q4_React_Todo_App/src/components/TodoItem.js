import React from 'react';

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
