import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState<Todo[][]>([
    [new Todo("Dummy text1"), new Todo("Second dummy")],
    [new Todo("Dummy text1"), new Todo("Second dummy")],
  ]);

  return (
    <div>
      <Todos items={toDos} />
    </div>
  );
}

export default App;
