import { useRouter } from 'next/router';
import React from 'react'

function Article() {

    const route = useRouter()
    const slug = route.query.slug || []

    console.log(route.query.slug);

    if (slug.length > 2) {
        return (
            <h1>you see {slug[0]} Article in {slug[1]}/{slug[2]}/{slug[3]} - {" "} {slug[4]} </h1>
        )
    }

    return (
        <h1>you see single Article</h1>
    )
}

export default Article;