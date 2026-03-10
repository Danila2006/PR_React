import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити практичну роботу" }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo }
    ]);

    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Мій список задач</h1>
      
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Нова задача"
        />
        <button onClick={addTodo}>Додати</button>
      </div>

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;