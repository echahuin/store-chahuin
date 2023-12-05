import React from 'react'
import styles from './banner.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';
    
function Banner({products}) {
    console.log(products)

    const {color, titleProduct, description, productAgent, category} = products[0]
    
    return (
        <section style={{background: `${color}` }} className={styles.section}>
            <div className={styles.contBanner}>
                <div className={styles.contImg}>
                    <Image
                        style={{objectFit: "cover"}}
                        src={productAgent.img}
                        fill={true}
                        alt={productAgent.name}
                    />
                </div>
                <div className={styles.contText}>
                    <div>
                        <h1 className={styles.title}>{titleProduct}</h1>
                        <p className={styles.subtitle}>{description}</p>
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