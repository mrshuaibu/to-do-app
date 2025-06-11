function Input() {

    const addNewTask = event => {
    }

    return(
        <section>
            <h1>Task tracker</h1>
            <form onSubmit={addNewTask}>
                <input type="text" name="task" placeholder="Enter new task" />
                <input type="submit" value="Add" />
            </form>
        </section>
    );
}

export default Input;