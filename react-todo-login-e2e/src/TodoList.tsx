import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: newTodoText,
        };

        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    return (
        <div>
            <input type="text" value={newTodoText} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;