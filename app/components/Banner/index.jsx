import React from 'react'
import styles from './banner.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';
import truncateWords from '@/app/tools/truncateWords';
    
const Banner = ({products}) => {
    const { category } = products.data[0]
    const { image, color, titleBanner, descriptionBanner } = products.data[0].dataBanner
    
    return (
         <div style={{background: `${color}`}} className={styles.section}>
            <div className={styles.contBanner}>
                <div className={styles.contImg}>
                    {products && <Image
                        style={{objectFit: "cover"}}
                        src={image}
                        fill={true}
                        alt={`img ${category}`}
                    />}
                </div>
                <div className={styles.contText}>
                    {products && <div>
                        <h1 className={styles.title}>{truncateWords(titleBanner, 21)}</h1>
                        <p className={styles.subtitle}>{truncateWords(descriptionBanner, 35)}</p>
                    </div>}
                    <Link  href={`/product/${category}`}>
                        <ButtonSmall text="Ver mas"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner