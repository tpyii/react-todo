import React from 'react';
import TodoListItem from '../todo-list-item/';
import './index.css';

const TodoList = ({ todos, deleteItem, onBtnImportantClick, onLabelClick }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} 
        className="list-group-item">
        <TodoListItem { ...itemProps } 
        deleteItem={() => deleteItem(id)}
        onBtnImportantClick={() => onBtnImportantClick(id)}
        onLabelClick={() => onLabelClick(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list mb-2">
      { elements }
    </ul>
  );
}

export default TodoList;
