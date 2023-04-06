import Classes from "./TodoItem.module.css";

const ToDoUI: React.FC<{
  text: string;
  id: string;
  onDeleteTodo: (test: string) => void;
}> = (props) => {
  return (
    <li className={Classes.item}>
      {props.text}{" "}
      <button
        onClick={() => {
          props.onDeleteTodo(props.id);
        }}
      >
        DEL
      </button>
    </li>
  );
};

export default ToDoUI;
