import React from 'react'
import styles from './styles.module.scss'
import TemplateCar from '../TemplateCar'
import { useCartContext } from '@/app/context/CartContext';
import ButtonSmall from '../UI/ButtonSmall';

const ListProductCart = () => {

    const {cart, removeFromCart } = useCartContext()

    const totalPrice = cart.reduce((acc, item)=>{
        return acc + item.totalParcial
    }, 0)

    const handleDeletedata = (id) => {
        removeFromCart(id)
    }
    
  return (
    <div className={styles.contCarDetail} >
        <div className={styles.contTemplate}>
        { 
            cart.map((item, index)=>{
                return <TemplateCar key={index} handleDelete={handleDeletedata} data={item}/>
            })
        }
        </div>
        <div className={styles.contTotal}>
            <span> 
                Total a Pagar: {totalPrice}$
            </span>
            <div className='pt-5'>
                <ButtonSmall disabled={!(cart.length > 0)} text="Pagar" />      
            </div>
        </div>
    </div>
  )
}

export default ListProductCart