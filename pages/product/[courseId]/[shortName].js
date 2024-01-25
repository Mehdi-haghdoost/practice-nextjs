import React from 'react'
import { useRouter } from 'next/router'

function ProductDetails() {

  const route = useRouter()
  console.log(route);

  return (
    <h1>ProductDetails</h1>
  )
}

export default ProductDetails