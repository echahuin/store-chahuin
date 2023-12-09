import React from 'react'
import Card from '../Card'
import styles from './styles.module.scss'
import Link from 'next/link'
import getProductCategory from '@/app/utils/getProductCategory'

const ProductList = async({category}) => {

  const dataResponse = await getProductCategory(category)
  // console.log(dataResponse[0].products)

  return (
    <div className={styles.contCards}>
      {
        dataResponse[0].products.map((item, index) => {
          return (
            <div key={index}>
              <Link href={`/product/${category}/description/${item.id}`} >
                <Card  data={item} />
              </Link>
            </div>
            )
          })
      }
    </div>
  )
}

export default ProductList