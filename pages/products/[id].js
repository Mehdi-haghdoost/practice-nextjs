import React from 'react'

function product({ product }) {
    return (
        <div>
            <h2>
                {product.title}
            </h2>
            ho
        </div>
    )
}

export async function getStaticPath(context) {
    const productID = context.params.id
    const res = await fetch(`https://fakestoreapi.com/products/${productID}`)
    const data = await res.json()
    
    return {
        props: {
            product: data,
        },
    };
}

export default product