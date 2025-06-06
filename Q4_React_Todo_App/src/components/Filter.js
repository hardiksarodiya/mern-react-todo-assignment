import React from 'react';

export default function Filter({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
}
