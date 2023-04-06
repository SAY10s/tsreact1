import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Dummy text1"), new Todo("Second dummy")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
