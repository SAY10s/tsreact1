import React from "react";
import Todo from "../models/todo";
import TodoUI from "./TodoUI";
import Classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={Classes.todos}>
      {props.items.map((item) => (
        <TodoUI key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
