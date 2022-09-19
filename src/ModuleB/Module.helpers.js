const getTaskIndex = (todos, id) => {
    return todos.findIndex(todo => todo.id === id);
}

export { getTaskIndex }