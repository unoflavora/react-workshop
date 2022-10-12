// Source: https://codesandbox.io/s/5i7gu?file

import { useState } from 'react';
import { isValueEmpty } from './Todo.helpers';
import { Heading, Container, Input, Button, Li } from './Todo.styles';

const Todo = () => {
    const [task, setTask] = useState('');
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setTask(newValue);
    }

    function addTask() {
        if (!isValueEmpty(task)) {
            setItems((prevValues) => {
                return [...prevValues, task];
            });
            setTask('');
        }
    }

    function deleteItem(id) {
        if (!isValueEmpty(id)) {
            setItems((prevValues) => {
                return prevValues.filter((item, index) => {
                    return index !== id;
                });
            });
        }
    }

    return (
        <div className='todo'>
            <Container>
                <Heading>
                    <h1>To-Do List</h1>
                </Heading>
                <div>
                    <Input name="taskInput" type="text" onChange={handleChange} value={task} />
                    <Button type="button" onClick={addTask}>
                        <span>ADD</span>
                    </Button>
                </div>
                <div>
                    <ul>
                        {items.map((item, index) => {
                            const compId = String(index);

                            return (
                                <div key={compId}>
                                    <Li>
                                        <span>{item}</span>{' '}
                                        <button type="button" onClick={() => deleteItem(index)}>
                                            X
                                        </button>
                                    </Li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Todo;
