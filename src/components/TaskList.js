function TaskList({ tasks, dispatch, setText, setEditTask }) {
  const handleEdit = (task) => {
    setText(task.text);
    setEditTask(task);
  };

  return (
    <section className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks
          .slice(0, 20) // Show only the first 20 newest tasks (tasks are newest first)
          .map((task) => (
            <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
              <p>{task.text}</p>
              <div className="task-footer">
                <p>{task.date}</p>
                <div>
                    <button onClick={() => dispatch({ type: "TOGGLE_DONE", payload: task.id })}>
                    {task.completed ? "❌" : "✅"}
                    </button>
                    <button onClick={() => handleEdit(task)}>✏️</button>
                    <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                        🗑️
                    </button>
                </div>
              </div>
            </div>
          ))
      )}
    </section>
  );
}


export default TaskList;
