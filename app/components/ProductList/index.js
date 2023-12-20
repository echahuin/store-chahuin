import React from 'react'
import Card from '../Card'
import styles from './styles.module.scss'
import getProductCategory from '@/app/utils/getProductCategory'

const ProductList = async({category}) => {

  const dataResponse = await getProductCategory(category)

  return (
    <div className={styles.contCards}>
      {
        dataResponse.map((item, index) => {
          return (
            <div key={index}>
                <Card  data={item}  />
            </div>
            )
          })
      }
    </div>
  )
}


export default ProductList