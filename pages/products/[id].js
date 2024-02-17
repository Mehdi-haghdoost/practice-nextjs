import React from 'react'
import styles from '../../styles/[id].module.css'

function product({ product }) {
    return (
        <div>
            <h2>
                {product.title}
            </h2>
            <img className={styles.product_Img} src={product.image} alt="" />
            <hr />
        </div>
    )
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
            { params: { id: '6' } },
            { params: { id: '7' } },
        ],
        fallback: false
    };
}

export async function getStaticProps(context) {
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