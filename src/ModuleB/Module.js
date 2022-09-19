import { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

import * as styles from './Module.styles'

import { getTaskIndex } from './Module.helpers'

import ModuleChild from './ModuleChild'

const Todo = () => {
    const [todos, setTodos] = useState([])

    const [editedTask, setEditedTask] = useState('')

    const editTodo = object => {
        const i = getTaskIndex(todos, object.id)
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
        const i = getTaskIndex(todos, object.id)
        todos[i].name = editedTask;

        setTodos([...todos])
        setEditedTask('')

        setTimeout(() => {
            editTodo(object);
        }, 100)
    };

    const deleteTodo = object => {
        const i = getTaskIndex(todos, object.id)
        todos.splice(i, 1);
        setTodos([...todos])
    };

    const doneTodo = object => {
        const i = getTaskIndex(todos, object.id)
        todos[i].is_done = true;

        setTodos([...todos])
    };

    return (
        <div style={styles.container}>
            <div>
                <h2 style={styles.header}>ToDo List</h2>
            </div>

            <ModuleChild todos={todos} setTodos={setTodos} />

            {todos.length > 0
                ? <div>
                    <table style={{ marginTop: 20 }}>
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
                                                        style={styles.button}
                                                        variant="outlined"
                                                        color="primary"
                                                        size="small"
                                                        disabled={editedTask === ''}
                                                        onClick={() => saveEditTask(object)}
                                                    >
                                                        Save
                                                    </Button>
                                                    <Button
                                                        style={styles.button}
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
                                                        style={styles.button}
                                                        variant="outlined"
                                                        color="primary"
                                                        size="small"
                                                        onClick={() => editTodo(object)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        style={styles.button}
                                                        variant="outlined"
                                                        color="secondary"
                                                        size="small"
                                                        disabled={object.is_done}
                                                        onClick={() => doneTodo(object)}
                                                    >
                                                        Done
                                                    </Button>
                                                    <Button
                                                        style={styles.button}
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