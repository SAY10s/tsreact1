import React from "react";
import Todo from "../models/todo";
import TodoUI from "./TodoUI";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoUI key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
