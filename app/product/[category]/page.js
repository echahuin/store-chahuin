import React, { Suspense } from 'react'
import Styles from './stylesProduct.module.scss'
import Filters from '../../components/Filters'
import ProductList from '../../components/ProductList'


function product({params}) {

  const {category } = params

  return (
    <div className={Styles.contDetail} >
        <Filters />
        <Suspense fallback={<div className="w-full h-full justify-content:center align-items:center">Loading...</div>}>
          <ProductList category={category}/>
        </Suspense>
    </div>
  )
}

export default product