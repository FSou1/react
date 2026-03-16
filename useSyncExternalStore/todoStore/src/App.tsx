import { useSyncExternalStore } from "react";
import { todoStore } from "./todoStore";

export default function App() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);

  return (
    <>
      <h1>Todo List</h1>
      <button onClick={() => todoStore.addTodo()}>Add Todo</button>
      <button onClick={() => todoStore.clearAll()}>Clear All</button>
      <button onClick={() => todoStore.removeFirst()}>Remove First</button>
      <button onClick={() => todoStore.removeLast()}>Remove Last</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  )
}
