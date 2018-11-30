import React from 'react';

const AppHeader = ({ active, done }) => {
  return (
    <div className="d-flex justify-content-between align-items-end">
      <h1>Todo List</h1>
      <h6>{ active } more to do, { done } done</h6>
    </div>
  );
}

export default AppHeader;
