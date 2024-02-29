import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <ul>
            {todos.length ? (
                todos.map((todo) => (
                    <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>
                            <h3>{todo.title}</h3>
                        </Link>
                        <hr />
                        <p>
                            completed : {todo.completed ? "✅" : "❌"}
                        </p>
                    </li>
                    
                ))
            ): <h1>Todos notFound</h1>
        }
        </ul >
    )
}

export default Todos