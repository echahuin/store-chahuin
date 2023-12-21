import React from 'react'
import Styles from './stylesProduct.module.scss'
import Filters from '../../components/Filters'
import ProductList from '../../components/ProductList'
import getProductCategory from '@/app/utils/getProductCategory'
import { Suspense } from 'react'

const Product = async({params}) => {

  const { category } = params
  const dataResponse = await getProductCategory(category)

  return (
    <div >
        <Filters productsData={dataResponse}>
          <ProductList />
        </Filters>
        {/* <Filters  productsData={dataResponse}/>
        <Suspense fallback={<div className="w-full h-full justify-content:center align-items:center bg-red-500">Loading...</div>}>
          <ProductList productsData={dataResponse}/>
        </Suspense> */}
    </div>
  )
}

export default Product