import React from 'react'
import { useRouter } from 'next/router';
function SinglePage() {
   

    const route = useRouter()

    return (
        <h1>SinglePage : {route.query.shortName} </h1>
    )
}

export default SinglePage;