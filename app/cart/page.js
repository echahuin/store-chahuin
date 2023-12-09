"use client"
// import React from 'react'""
import styles from './styles.module.scss'
import ListProductCart from '../components/ListProductCart'

const Cart = () => {

  return (
    <div className={styles.contCar} >
      <ListProductCart />   
    </div>
  )
}

export default Cart