import React from 'react'
import FormPayment from '../../components/FormPayment'
import styles from './styles.module.scss' 

const Payment = () => {
  return (
    <div className={styles.contPayment}>
        <FormPayment />
    </div> 
  )
}

export default Payment