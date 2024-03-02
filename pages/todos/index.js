import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr'

const todosFetcher = () => 
    fetch("http://localhost:4000/todos").then(res => res.json());


function Todos() {

    const { data, error } = useSWR("todos", todosFetcher)
    console.log(data);
    if (error) {
        return <h1>Unknow Error !!</h1>
    }




    return (
        <ul>
            {data?.length ? (
                data?.map((todo) => (
                    <li key={todo.id}>
                        <Link href={`/todos/${todo.id}`}>
                            <h3>
                                {todo.id}- {todo.title}
                            </h3>
                            <hr />
                        </Link>
                    </li>
                ))
            ) : null
            }
        </ul >
    )
}

export default Todos