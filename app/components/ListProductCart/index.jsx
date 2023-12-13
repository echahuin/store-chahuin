import React from 'react'
import styles from './styles.module.scss'
import TemplateCar from '../TemplateCar'
import { useCartContext } from '@/app/context/CartContext';
import ButtonSmall from '../UI/ButtonSmall';
import Link from 'next/link'

const ListProductCart = () => {

    const {cart, removeFromCart } = useCartContext()
    console.log(cart)

    const totalPrice = cart.reduce((acc, item)=>{
        const totalPrice = item.quantity * item.price
        return acc + totalPrice
    }, 0)

    const handleDeletedata = (slug) => {
        removeFromCart(slug)
    }

  return (

    <div className={styles.contCarDetail} >
        <div className={styles.contTemplate}>
        { 
           cart.length ? cart.map((item, index)=>{
                return <TemplateCar key={index} handleDelete={handleDeletedata} data={item}/>
            }) : 
            <div className='mx-auto w-full h-full flex justify-center items-center ' >
                <span style={{color: "#6b6b6b"}}>No hay productos en el carrito</span>
            </div>
        }
        </div>
        <div className={styles.contTotal}>
            <span> 
                Total a Pagar: {totalPrice}$
            </span>
            <div className='pt-5'>
                <Link href='/PaymentPage'>
                    <ButtonSmall disabled={!(cart.length > 0)} text="Pagar" />      
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ListProductCart