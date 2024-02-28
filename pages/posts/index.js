import React from 'react'
import Link from 'next/link';
function Posts({ posts }) {
    return (
        <ul>
            {
                posts.map((post) => (
                    <li>
                        <Link href={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.body}</p>
                        <hr />
                    </li>
                ))
            }
        </ul>
    )
}

export async function getServerSideProps(context) {

    const { params, query, res: request, res: response } = context;

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    console.log(`SSR => getServerSideProps`);
    // console.log(`params =>`, params);
    // console.log(`query =>`, context.query.writer);
    // console.log(`request =>`, request);
    // console.log(`response =>`, response);


    return {
        props: {
            posts: data.slice(0, 8),
        },
    };
}

export default Posts