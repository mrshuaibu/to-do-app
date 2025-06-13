import { useReducer, useState, useEffect } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [action.payload, ...state];
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? { ...action.payload } : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_DONE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, [], () => {
    const local = localStorage.getItem("tasks");
    return local ? JSON.parse(local) : [];
  });

  const [text, setText] = useState("");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main>
      <div className="container">
        <Input
          text={text}
          setText={setText}
          dispatch={dispatch}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        <TaskList
          tasks={tasks}
          dispatch={dispatch}
          setText={setText}
          setEditTask={setEditTask}
        />
      </div>
    </main>
  );
}

export default App;
