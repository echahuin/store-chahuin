import React from 'react'
import data from '../../data.json'
import Card from '../Card'
import styles from './styles.module.scss'
import Link from 'next/link'

const ProductList = ({category}) => {

  const aux = data.dt.filter((item) => item.category === category)

  return (
    <div className={styles.contCards}>
      {
        aux[0].products.map((item, index) => {
          return (
            <div key={index}>
              <Link href={`/product/${category}/description/${item.id}`} >
                <Card data={item} />
              </Link>
            </div>
            )
          })
      }
    </div>
  )
}

export default ProductList