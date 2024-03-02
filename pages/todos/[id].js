import React, { useState } from 'react'

function Todo({ todo: { id, completed, title } }) {
    const [todo, setTodo] = useState({ id, completed, title })

    async function toggleCompleteHandler() {

        const res = await fetch(`http://localhost:4000/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: todo.title,
                completed: !todo.completed,
            }),
        })
        console.log('res =>', res);
        const data = await res.json()
        if (res.status === 200) {
            setTodo(data)
            console.log("Todo Completed Successfully :))");
        }
    }

    return (
        <li key={todo.id}>

            <h3>{todo.id}.{todo.title}</h3>
            <p>
                completed : {todo.completed ? "✅" : "❌"}
            </p>

            <button onClick={() => {
                toggleCompleteHandler()
            }}>toggle completed</button>
            <hr />
        </li>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const res = await fetch(`http://localhost:4000/todos/${params.id}`)
    const data = await res.json();

    return {
        props: {
            todo: data,
        }
    };
}

export default Todo