import React from 'react'
import { useRouter } from 'next/router';
function SinglePage() {
   

    const route = useRouter()
    const redirectHandler = () => {
        // route.push({
        //     pathname : '/courses/[shortName]',
        //     query : {
        //         shortName : 'node'
        //     }
        // })
        route.replace('/courses/node')
    }


    return (
        <>
        <h1>SinglePage : {route.query.shortName} </h1>
        <hr />
        <button onClick={redirectHandler}>Go</button>
        </>
    )
}

export default SinglePage;