import ProductList from '@/app/components/ProductList'
import getProductSubCategory from '@/app/utils/getProductSubCategory'
import React, { Suspense } from 'react'
import Loading from '@/app/components/UI/Loading'

export const generateMetadata = async ({params}) => {
  return {
      title: 'store-chahuin - ' + params.category
  }
}

const SubCategory = async ({params}) => {

    const { category, subCategory } = params
    const category_subCategory = `${category}-${subCategory}`
    const data = await getProductSubCategory(category_subCategory)

  return (
  <Suspense fallback={<Loading />}>
    <ProductList filterData={data}/>
  </Suspense>
  )
}

export default SubCategory