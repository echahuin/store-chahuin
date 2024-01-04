import React from 'react'
import CreateForm from '@/app/components/UI/createForm'
import getProductCategorySlug from '@/app/utils/getProductCategorySlug'
import styles from './styles.module.scss'

const Edit = async({params}) => {

  const response = await getProductCategorySlug(params)
    
  return (
    <div className={styles.createForm}>
      <CreateForm data={response} editForm={true}/>
  </div>
  )
}

export default Edit