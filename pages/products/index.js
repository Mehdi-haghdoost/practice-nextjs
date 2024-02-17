import React from 'react'
import styles from './../../styles/products.module.css'
import Link from 'next/link'

function Products({ products }) {
  return (
    <>
      <div>
        {
          products.map(product => (
            <>
              <h2 className={styles.title} key={product.id}>
                <Link href={`/products/${product.id}`}>
                  {product.id}.{product.title}
                </Link>

              </h2>
              <img className={styles.product_Img} src={product.image} alt="clothes" />
              <hr />
            </>
          ))
        }
      </div>
    </>

  )
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=7')
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}

export default Products