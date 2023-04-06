import React from "react";
import Todo from "../models/todo";
import TodoUI from "./TodoUI";
import Classes from "./todos.module.css";
import { useState } from "react";

const Todos: React.FC = () => {
  const [toDos, setToDos] = useState<Todo[][]>([
    [new Todo("Dummy text1"), new Todo("Second dummy")],
    [new Todo("Dummy text1"), new Todo("Second dummy")],
  ]);

  return (
    <ul>
      {toDos.map((item) => {
        return (
          <div className={Classes.xd}>
            {item.map((item2) => {
              return <TodoUI key={item2.id} text={item2.text} />;
            })}
          </div>
        );
      })}
    </ul>
  );
};
export default Todos;
