function Input({ text, setText, dispatch, editTask, setEditTask }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") return;

    if (editTask) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          ...editTask,
          text,
          date: new Date().toLocaleString(),
        },
      });
      setEditTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        text,
        date: new Date().toLocaleString(),
        completed: false,
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
    }

    setText("");
  };

  return (
    <section>
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value={editTask ? "Update" : "Add"} />
      </form>
    </section>
  );
}

export default Input;
