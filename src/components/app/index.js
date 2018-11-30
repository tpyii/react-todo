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
      label
    }

    this.setState(({ todos }) => {
      return {
        todos: [...todos, newItem]
      }
    });
  }

  onLabelClick = id => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      if(item.id === id)
        item.done = !item.done;

      return item;
    });

    this.setState(({ todos }) => {
      return {
        todos: newTodos
      }
    });
  }

  onBtnImportantClick = id => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      if(item.id === id)
        item.important = !item.important;

      return item;
    });

    this.setState(({ todos }) => {
      return {
        todos: newTodos
      }
    });
  }

  render() {
    const { todos } = this.state;

    const todosActive = todos.filter(item => {
      return !item.done;
    });

    const todosDone = todos.filter(item => {
      return item.done;
    });

    return (
      <div className="container">
        <AppHeader active={todosActive.length} 
                   done={todosDone.length} 
        />
        <SearchPanel />
        <TodoList todos={ todos } 
                  deleteItem={this.deleteItem}
                  onLabelClick={this.onLabelClick}
                  onBtnImportantClick={this.onBtnImportantClick} 
        />
        <ItemAddPanel addItem={this.addItem} />
      </div>
    );
  }
}