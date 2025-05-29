import React, { useState } from 'react';

export default function AddTodo({ addTask }) {
  const [value, setValue] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTask(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
