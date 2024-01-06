import ProductList from '@/app/components/ProductList'
import getProductSubCategory from '@/app/utils/getProductSubCategory'
import React from 'react'

const SubCategory = async ({params}) => {

    const { category, subCategory } = params
    const category_subCategory = `${category}-${subCategory}`
    const data = await getProductSubCategory(category_subCategory)
    console.log(data)

  return (
  <ProductList filterData={data}/>
  )
}

export default SubCategory