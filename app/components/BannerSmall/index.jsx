import React from 'react'
import styles from './bannerSmall.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';

// img: '/products/busoDama/1.jpg',
// title: 'Where does it come from?',
// price: 2500,
// category: 'buso dama',
// banner: true,
// stock: 12,
// dataBanner: {
//   descriptionBanner: '',
//   typeBanner: 'small-1',
//   image: '/products/busoDama/1.jpg',
//   color: '#D6D490',
//   titleBanner: 'Cierre de temporada en busos'
// }

function BannerSmall({data}) {

  console.log(data)
  const { category } = data
  const {image, color, titleBanner} = data.dataBanner

  return (
    <div style={{background: `${color}`}} className={styles.bannerSmall} >
      <div className={styles.contTextBannerSmall} >
              <h4>{category}</h4>
              <h1>{titleBanner}</h1>
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