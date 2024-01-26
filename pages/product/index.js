import React from 'react'
import Link from 'next/link'
function Products() {
  return (
    <>
    <h1>Products Details</h1>
    <ul>
        <li>
            <Link href='/courses/nextjs'>nextjs</Link>
        </li>
        <li>
            <Link href='/courses/reactjs'>reactjs</Link>
        </li>
    </ul>
    </>

  )
}

export default Products