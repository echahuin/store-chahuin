import React from 'react'
import Image from 'next/image'
import styles from './stylesDescription.module.scss'
import data from '../../../../data.json'
import ButtonSmall from '../../../../components/ButtonSmall'


const Description = ({params}) => {
  
    // console.log(data)
    const aux = data.dt.filter((item) => item.category === params.category)
    const aux2 = aux[0].products.filter((item) => item.id === params.id)
    const {title, img, name} = aux2[0]
    // console.log(aux2[0])


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
            <h1>{title}</h1>
            {/* <Link  href={`/product/${category}`}> */}
              <ButtonSmall text="Add Car"/>
            {/* </Link> */}
        </div>
    </div>
    // <div className={styles.contDescription} >
    //     <div className={styles.cont}>
    //         <div className={styles.contImg}>
    //         <Image
    //             className={styles.img}
    //             style={{objectFit: "cover"}}
    //             src={img}
    //             fill="responsive"
    //             alt={name}
    //         />
    //         </div>
    //     </div>
    //     <div className={styles.contDescriptionDetail}>
    //         <h1>
    //             {name} 
    //         </h1>
    //         <ButtonSmall text="add car"/>
    //     </div>
    // </div>
  )
}

export default Description