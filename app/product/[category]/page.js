import React from 'react'
import Styles from './stylesProduct.module.scss'
import Filters from '../../components/Filters'
import ProductList from '../../components/ProductList'

function product({params}) {

  const {category } = params

  return (
    <div className={Styles.contDetail} >
        <Filters />
        <ProductList category={category}/>
    </div>
  )
}

export default product