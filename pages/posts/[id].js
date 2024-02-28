import React from 'react'

function post({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()


    if (!Object.keys(data).length) {
        return {
            // notFound: true,
            redirect : {destination : '/'},
        };
    }

    return {
        props: {
            post: data
        }
    }
}

export default post