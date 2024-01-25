import React from 'react';
import { useRouter } from 'next/router';

function ArticlesDetails() {

    const route = useRouter()
    console.log(route.query.shortName);

  return (
    <h1>{`Articles Details (${route.query.shortName})`}</h1>
  )
}

export default ArticlesDetails