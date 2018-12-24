import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemAddPanel from '../item-add-panel/';

export default class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Make Awesome App', important: false, done: false },
      { id: 3, label: 'Have a lunch', important: false, done: false },
    ],
  }

  deleteItem = id => {
    this.setState(({ todos })=> {
      return {
        todos: todos.filter(item => {
          return item.id !== id;
        })
      }
    });
  }

  addItem = label => {
    const newItem = {
      id: Date.now(),
      label,
      important: false,
      done: false,
    }

    this.setState(({ todos }) => {
      return {
        todos: [...todos, newItem]
      }
    });
  }

  toggleTodoProp = (id, propName) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex(el => el.id === id);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      const newArray = [
        ...todos.slice(0, idx),
        newItem,
        ...todos.slice(idx + 1)
      ];

      return {
        todos: newArray
      }
    });
  }

  render() {
    const { todos } = this.state;
    const todosDoneCount = todos.filter(item => item.done).length;
    const todosActiveCount = todos.length - todosDoneCount;

    return (
      <div className="container">
        <AppHeader active={todosActiveCount} 
                   done={todosDoneCount} 
        />
        <SearchPanel />
        <TodoList todos={ todos } 
                  deleteItem={this.deleteItem}
                  toggleTodoProp={this.toggleTodoProp}
        />
        <ItemAddPanel addItem={this.addItem} />
      </div>
    );
  }
}
