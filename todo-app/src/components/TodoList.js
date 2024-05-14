import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo } from "../actions/todoActions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // State to store the checked status of each todo item
  const [checkedItems, setCheckedItems] = useState({});

  // Function to handle checkbox change
  const handleCheckboxChange = (todoId) => {
    setCheckedItems({
      ...checkedItems,
      [todoId]: !checkedItems[todoId],
    });
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              className="checkbox"
              checked={checkedItems[todo.id] || false}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <TodoItem
              todo={todo}
              onDelete={() => dispatch(deleteTodo(todo.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
