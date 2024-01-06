import React from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

const ProductList = ({filterData}) => {

  return (
    <div className={styles.contCards}>
      {
        filterData.map((item, index) => {
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