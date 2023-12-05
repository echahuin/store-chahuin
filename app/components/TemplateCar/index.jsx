import React from 'react'
import styles from './templateCar.module.scss';
import ButtonSmall from '../UI/ButtonSmall'
import Image from 'next/image'
import { useCartContext } from '@/app/context/CartContext';

const TemplateCar = ({ data}) => {

    const { removeFromCart } = useCartContext()
    console.log(data)

    const handleRemove = ()=>{
        removeFromCart(data)
    }

  return (
    <div className={styles.ContCar}>
        <div className={styles.contImgDescription}>
            <div className={styles.contImgCar}>
                <Image
                    style={{objectFit: "cover"}}
                    src={data.img}
                    fill={true}
                    alt={`img`}
                    />
            </div>
            <div className={styles.contDetail}>
                    <h4>{data.category}</h4>
                    <h1>{data.title}</h1>
                    <span>Cantidad: <strong>{data.cantidad}</strong></span>
                    <span>Precio: <strong>{data.price} $</strong></span>
            </div>
        </div>
        <div className={styles.contButton} >
            {/* <ButtonSmall onClick={handleRemove()} text="X"/> */}
            <span>240 $</span>
        </div>
    </div>
  )
}

export default TemplateCar