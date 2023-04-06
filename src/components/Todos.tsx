import React from "react";
import Todo from "../models/todo";
import TodoUI from "./TodoUI";
import Classes from "./todos.module.css";

const Todos: React.FC<{ items: Todo[][] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
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
