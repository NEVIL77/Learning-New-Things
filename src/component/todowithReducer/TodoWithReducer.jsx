import React, { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Unknown action");
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = React.useState("");

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch({ type: "add", payload: task });
      setTask("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
