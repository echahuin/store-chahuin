"use client"
import React from 'react'
import Card from '../Card'
import styles from './styles.module.scss'
import { useProductDataContext } from '@/app/context/ProductDataContext'

const ProductList = () => {


// console.log('this', props)
  const { filterData } = useProductDataContext()

  // useEffect(() => {
  //   getProducts(productsData)
  // }, [productsData, getProducts]);

  // console.log('important Products', products)

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