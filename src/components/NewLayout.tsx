import { useRef } from "react";

const NewTodo: React.FC<{ onAddLayout: (text: string) => void }> = (props) => {
  const layoutTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = layoutTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddLayout(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Add layout</label>
      <input type="text" id="text" ref={layoutTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
