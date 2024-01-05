import React from 'react'
import styles from './bannerSmall.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';
import truncateWords from '@/app/tools/truncateWords';


function BannerSmall({data}) {
  const { category } = data
  const {image, color, titleBanner} = data.dataBanner

  return (
    <div style={{background: `${color}`}} className={styles.bannerSmall} >
      <div className={styles.contTextBannerSmall} >
              <h4>{category}</h4>
              <h1>{truncateWords(titleBanner, 21)}</h1>
            <div className={styles.buttonDetail}>
              <Link  href={`/product/${category}`}>
                <ButtonSmall text="Ver mas"/>
              </Link>
            </div>
        </div>
        <div className={styles.contBannerSmallImg}>
          <Image
              style={{objectFit: "cover"}}
              src={image}
              fill={true}
              alt={`img ${category}`}
              />
        </div>
    </div>
  )
}

export default BannerSmall