import React from 'react'
import styles from './banner.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';
    
const Banner = async({products}) => {
    const { category } = products.data[0]
    const { image, color, titleBanner, descriptionBanner } = products.data[0].dataBanner
    
    return (
        <section style={{background: `${color}`}} className={styles.section}>
            <div className={styles.contBanner}>
                <div className={styles.contImg}>
                    <Image
                        style={{objectFit: "cover"}}
                        src={image}
                        fill={true}
                        alt={`img ${category}`}
                    />
                </div>
                <div className={styles.contText}>
                    <div>
                        <h1 className={styles.title}>{titleBanner}</h1>
                        <p className={styles.subtitle}>{descriptionBanner}</p>
                    </div>
                    <Link  href={`/product/${category}`}>
                        <ButtonSmall text="Ver mas"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner