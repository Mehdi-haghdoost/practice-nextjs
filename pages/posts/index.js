import React from 'react'

function Posts({ posts }) {
    return (
        <ul>
            {
                posts.map((post) => (
                    <li>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <hr />
                    </li>
                ))
            }
        </ul>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    console.log(`SSR => getServerSideProps`);

    return {
        props: {
            posts: data.slice(0, 8),
        },
    };
}

export default Posts