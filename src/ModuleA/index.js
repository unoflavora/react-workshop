import { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [editedTask, setEditedTask] = useState('')

    const onChangeTask = e => {
        setTask(
            e.target.value,
        );
    };

    const addTask = () => {
        const obj = {
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
            name: task,
            is_editing: false,
            is_done: false,
        };
        setTodos(prev => [...prev, obj])
        setTask('')
    };

    const editTodo = object => {
        const i = todos.findIndex(todo => todo.id === object.id);
        todos[i].is_editing = !todos[i].is_editing;

        todos.map(todo => {
            todo.id !== object.id
                ? (todo.is_editing = false)
                : (todo.is_editing = todo.is_editing);
            return todo;
        });

        setTodos([...todos])
        setEditedTask(object.name)
    };

    const editTask = todo => {
        setEditedTask(todo)
    };

    const saveEditTask = object => {
        const i = todos.findIndex(todo => todo.id === object.id);
        todos[i].name = editedTask;

        setTodos([...todos])
        setEditedTask('')

        setTimeout(() => {
            editTodo(object);
        }, 100)
    };

    const deleteTodo = object => {
        const i = todos.findIndex(todo => todo.id === object.id);
        todos.splice(i, 1);
        setTodos([...todos])
    };

    const doneTodo = object => {
        const i = todos.findIndex(todo => todo.id === object.id);
        todos[i].is_done = true;

        setTodos([...todos])
    };

    return (
        <div>
            <div>
                <h2>ToDo List</h2>
            </div>

            <div>
                <TextField
                    id="standard-basic"
                    autoComplete="off"
                    value={task}
                    onChange={onChangeTask}
                    placeholder="Add TO DO"
                />
                <Button
                    className="button_style"
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={task === ''}
                    onClick={addTask}
                >
                    Add
                </Button>
            </div>

            {todos.length > 0
                ? <div>
                    <table className="centerTable" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {todos.map((object) => {
                            return (
                                <tbody key={object.name}>
                                    <tr>
                                        <td>
                                            {object.is_editing
                                                ? <TextField
                                                    id="standard-basic"
                                                    value={editedTask}
                                                    onChange={e => editTask(e.target.value)}
                                                />
                                                : object.is_done
                                                    ? <s>{object.name}</s>
                                                    : <span>{object.name}</span>}
                                        </td>
                                        <td>
                                            {object.is_editing
                                                ? <div>
                                                    <Button
                                                        className="button_style"
                                                        variant="outlined"
                                                        color="primary"
                                                        size="small"
                                                        disabled={editedTask === ''}
                                                        onClick={() => saveEditTask(object)}
                                                    >
                                                        Save
                                                    </Button>
                                                    <Button
                                                        className="button_style"
                                                        variant="outlined"
                                                        color=""
                                                        size="small"
                                                        onClick={() => editTodo(object)}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </div>
                                                : <div>
                                                    <Button
                                                        className="button_style"
                                                        variant="outlined"
                                                        color="primary"
                                                        size="small"
                                                        onClick={() => editTodo(object)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        className="button_style"
                                                        variant="outlined"
                                                        color="secondary"
                                                        size="small"
                                                        disabled={object.is_done}
                                                        onClick={() => doneTodo(object)}
                                                    >
                                                        Done
                                                    </Button>
                                                    <Button
                                                        className="button_style"
                                                        variant="outlined"
                                                        size="small"
                                                        onClick={() => deleteTodo(object)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>}
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
                : <h2>Nothing to do!</h2>}
        </div>
    );
}

export default Todo