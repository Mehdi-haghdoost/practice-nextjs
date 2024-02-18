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

    const res = await fetch('https://fakestoreapi.com/products/?limit=7')
    const data = await res.json();

    const paths = data.map((product) => {
        return {
            params: { id: String(product.id) }
        }
    })

    return {
        paths,
        fallback : false,
    }
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