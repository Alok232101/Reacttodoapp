import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./styles.css";

const App = () => {
  return (
    <div className="content">
      <h1>React Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
