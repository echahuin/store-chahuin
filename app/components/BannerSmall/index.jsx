import React from 'react'
import styles from './bannerSmall.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../ButtonSmall';

function BannerSmall({data}) {

  const {typeProduct, titleProduct, productAgent, color, category} = data

  return (
    <div className={styles.bannerSmall} style={{background: `${color}`}}>
        <div className={styles.contTextBannerSmall} >
              <h4>{typeProduct}</h4>
              <h1>{titleProduct}</h1>
            <div className={styles.buttonDetail}>
              <Link  href={`/product/${category}`}>
                <ButtonSmall text="Ver mas"/>
              </Link>
            </div>
        </div>
        <div className={styles.contBannerSmallImg}>
          <Image
              style={{objectFit: "cover"}}
              src={productAgent.img}
              fill={true}
              alt={`img ${productAgent.name}`}
              />
        </div>
    </div>
  )
}

export default BannerSmall