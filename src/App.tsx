import TasksLayout from "./layouts/TasksLayout";
import NewLayout from "./components/NewLayout";
import "./App.css";
import { useState } from "react";

function App() {
  const [layouts, setLayouts] = useState<string[]>([]);

  const addLayoutHandler = (title: string) => {
    setLayouts((prevState) => {
      return prevState.concat(title);
    });
  };

  return (
    <>
      <div className="wrapperBig">
        {layouts.map((element) => {
          return <TasksLayout title={element} />;
        })}
      </div>

      <NewLayout onAddLayout={addLayoutHandler} />
    </>
  );
}

export default App;
