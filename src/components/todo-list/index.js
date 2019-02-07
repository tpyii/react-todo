import React from 'react';
import TodoListItem from '../todo-list-item/';
import './index.css';

const TodoList = ({ todos, searchValue, deleteItem, toggleTodoProp }) => {
  const filteredTodos = todos.filter((item) => {
    return item.label.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  });

  const elements = filteredTodos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} 
        className="list-group-item">
        <TodoListItem { ...itemProps } 
        deleteItem={() => deleteItem(id)}
        onBtnImportantClick={() => toggleTodoProp(id, 'important')}
        onLabelClick={() => toggleTodoProp(id, 'done')} />
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
