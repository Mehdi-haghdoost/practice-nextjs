import { useRouter } from 'next/router'
import React from 'react'

function Session() {

    const route = useRouter()
    console.log(route.query);

    

  return (
    <h1>{route.query.shortName}</h1>
  )
}

export default Session