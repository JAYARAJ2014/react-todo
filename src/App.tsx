import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [newTodo, setNewTodo] = useState("");



  return (
    <div className="app">
      <h1>Simple To-Do App</h1>

      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          // onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task..."
          // onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span >{todo.text}</span>
            <button >❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
