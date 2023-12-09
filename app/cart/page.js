"use client"
import React from 'react'
import styles from './styles.module.scss'
import { useCartContext } from '@/app/context/CartContext';
import Form from '../components/Form'
import ListProduct from '../components/ListProduct'

const Cart = () => {

  // const { cart } = useCartContext()
  const onSubmit = (values)=>{
    console.log(values)
  }

  return (
    <div className={styles.contCar} >
      {/* <ListProduct data={cart} />
      <Form onSubmit={onSubmit} values={{}} /> */}
    </div>
  )
}

export default Cart