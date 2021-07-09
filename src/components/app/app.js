import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import "./app.css";

const App = () => {
    const todoData = [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ];
  
    return (
      <React.StrictMode>
        <div className="todo-app">
          <AppHeader toDo={1} done={3}/>
          <div className="top-panel d-flex justify-content-between">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <TodoList todos={todoData}/>
        </div>
      </React.StrictMode>
    );
  };

export default App;