import React from "react";
import Todo from "../models/todo";
import TodoUI from "./TodoUI";
import Classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (test: string) => void;
}> = (props) => {
  return (
    <ul className={Classes.todos}>
      {props.items.map((item) => (
        <TodoUI
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo}
        />
      ))}
    </ul>
  );
};
export default Todos;
