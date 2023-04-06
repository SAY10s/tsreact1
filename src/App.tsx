import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Dummy text1"), new Todo("Second dummy")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
