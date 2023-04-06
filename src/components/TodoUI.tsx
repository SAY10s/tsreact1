import Classes from "./TodoItem.module.css";

const ToDoUI: React.FC<{ text: string }> = (props) => {
  return <li className={Classes.item}>{props.text}</li>;
};

export default ToDoUI;
