import React from 'react'
import CreateForm from '@/app/components/UI/createForm'
import styles from './styles.module.scss' 

const page = () => {
  return (
    <div className={styles.createForm}>
      <CreateForm />
    </div>

  )
}

export default page