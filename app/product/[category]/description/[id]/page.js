import React from 'react'
import Image from 'next/image'
import styles from './stylesDescription.module.scss'
import data from '../../../../data.json'
import ButtonSmall from '../../../../components/ButtonSmall'


const Description = ({params}) => {
  
    const aux = data.dt.filter((item) => item.category === params.category)
    const aux2 = aux[0].products.filter((item) => item.id === params.id)
    const {title, img, name, description, price} = aux2[0]
    console.log(aux2[0])


    return (
        <div className={styles.contDescription}>
        <div className={styles.contBannerSmallImg}>
          <Image
              style={{objectFit: "cover"}}
              src={img}
              fill={true}
              alt={`img`}
              />
        </div>
        <div className={styles.contTextBannerSmall} >
            <h4>{name}</h4>
            <div>
                <h1>{title}</h1>
                <span>{description}</span>
            </div>
              <ButtonSmall text="Add car"/>
        </div>
    </div>
  )
}

export default Description