import TodoItem from "./TodoItem";

const todos = [
  { id: 1, text: "Вивчити React" },
  { id: 2, text: "Створити Todo App" },
  { id: 3, text: "Завантажити проєкт на GitHub" },
];

function TodoList() {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}

export default TodoList;