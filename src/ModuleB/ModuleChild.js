import { useState } from 'react'

import { Button, TextField } from '@material-ui/core';

import * as styles from './ModuleChild.styles'
import { arrayOf, func, object } from 'prop-types';

const ModuleChild = ({ todos, setTodos }) => {
    const [task, setTask] = useState('')

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

    return (
        <div>
            <TextField
                id="standard-basic"
                autoComplete="off"
                value={task}
                onChange={onChangeTask}
                placeholder="Add TO DO"
            />
            <Button
                style={styles.button}
                variant="contained"
                color="primary"
                size="small"
                disabled={task === ''}
                onClick={addTask}
            >
                Add
            </Button>
        </div>
    )
}

ModuleChild.propTypes = {
    todos: arrayOf(object).isRequired,
    setTodos: func.isRequired
}

export default ModuleChild