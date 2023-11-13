import React from 'react'
import styles from './templateCar.module.scss';
import ButtonSmall from '../ButtonSmall'
import Image from 'next/image'

const TemplateCar = () => {

    const data =  {
                "title": "zapato tipo vestido",
                "description": "Los zapatos blancos con tacos de dama son un clásico de la moda femenina. Son un complemento perfecto para cualquier ocasión, desde un evento formal hasta una fiesta informal.     Estos zapatos se caracterizan por su diseño elegante y su color neutro. El blanco es un color que combina con todo, por lo que podrás usarlos con cualquier atuendo.",
                "price": 120,
                "category": "zapato-dama",
                "name": "zapato dama",
                "img": "/products/zapatoDama/1.jpg",
                "inStock": 10,
                "id": "e6adiqsbi6m2fue",
                "slug": "zapato-dama-e6adiqsbi6m2fue"
            }
    const cantidad = 2

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
                    <span>Cantidad: <strong>{cantidad}</strong></span>
                    <span>Precio: <strong>{data.price} $</strong></span>
            </div>
        </div>
        <div className={styles.contButton} >
            <ButtonSmall text="X"/>
            <span>240 $</span>
        </div>
    </div>
  )
}

export default TemplateCar