import React from 'react'
import styles from './templateCar.module.scss';
import ButtonSmall from '../UI/ButtonSmall'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCar = ({ handleDelete, data }) => {
    const category = data.typeCategoryGeneral

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
                    <span>Cantidad: <strong>{data.quantity}</strong></span>
                    <span>Precio: <strong>{data.price} $</strong></span>
            </div>
        </div>
        <div className={styles.contButton} >
            <ButtonSmall onClick={()=>handleDelete(data.id)} text="X"/>
            <div className='pr-4 pt-5 ' style={{ color: 'blue' }}>
                <Link href={`/product/${category}/description/${data.id}`} >Agregar...</Link>
            </div>
            <span>{data.totalParcial}$</span>
        </div>
    </div>
  )
}

export default TemplateCar