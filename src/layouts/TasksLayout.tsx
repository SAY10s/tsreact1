import { useState } from "react";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import Todo from "../models/todo";
import Classes from "./tasksLayout.module.css";

const TasksLayout = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const deleteTodoHandler = (test: string) => {
    setTodos((prevState) => {
      let newList = prevState.filter((element) => element.id !== test);
      return newList;
    });
  };

  return (
    <div className={Classes.taskLayoutWrapper}>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default TasksLayout;
