import React, { useEffect, useState } from 'react';
import Todo from './[id]';

function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
        
    }, [])

    return (
        <ul>
            {todos.length ? (
                todos.map((todo) => (
                   <Todo key={todo.id} {...todo} />
                ))
            ) : <h1>Todos notFound</h1>
            }
        </ul >
    )
}

export default Todos