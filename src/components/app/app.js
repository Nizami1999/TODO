import React, { Component } from "react";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import TodoList from "../todo-list";
import "./app.css";
import { waitForDomChange } from "@testing-library/react";

export default class App extends Component {

  // General 
  maxId = 100;

  createTodoItem(label){
    return {
      id: this.maxId++,
      label,
      important: false,
      done: false
    }
  }

  // State
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
  };


  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]; // before ... after

      return {
        todoData: newArray,
      };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({todoData}) => {

      // 1. update object
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important}

      // 2. construct new array
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      // 3. Return state
      return{
        todoData: newArray
      }
    })
  };

  onToggleDone = id => {          // если старый массив нужен ---> передаём функцию.
    this.setState(({todoData}) => {

      // 1. update object
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done}

      // 2. construct new array
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      // 3. Return state
      return {
        todoData: newArray
      }
    })
  };

  render() {

    const {todoData} = this.state;
    let doneItems = todoData.filter((el) => el.done === true).length;
    let toDoItems = todoData.length - doneItems;
      
    return (
      <React.StrictMode>
        <div className="todo-app">
          <AppHeader toDo={toDoItems} done={doneItems} />
          <div className="top-panel d-flex justify-content-between">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList
            todos={todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <ItemAddForm addItem={this.addItem} />
        </div>
      </React.StrictMode>
    );
  }
}
