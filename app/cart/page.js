"use client"
import React from 'react'
import styles from './styles.module.scss'
// import Form from '../components/Form'
import ListProductCart from '../components/ListProductCart'

const Cart = () => {
  const onSubmit = (values)=>{
    console.log(values)
  }

  return (
    <div className={styles.contCar} >
      <ListProductCart />
      {/* <Form onSubmit={onSubmit} values={{}} /> */}
    </div>
  )
}

export default Cart