import React from 'react'
import styles from './banner.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import ButtonSmall from '../UI/ButtonSmall';

// data: [
//     {
//       title: 'Where does it come from?',
//       banner: true,
//       price: 10,
//       stock: 56,
//       img: '/products/camisaDama/1.jpg',
//       description: 
//         'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//       dataBanner: {
//         color: '#D69790',
//         image: '/products/camisaDama/1.jpg',
//         typeBanner: 'big-1',
//         titleBanner: 'camisa dama',
//         descriptionBanner: 'this mi description'
//       },
//       category: 'camisa dama'
//     },
//     {
//       title: 'Where does it come from?',
//       description: 
//         'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//       img: '/products/zapatoHombre/1.jpg',
//       category: 'zapato hombre',
//       banner: true,
//       stock: 8,
//       price: 646,
//       dataBanner: {
//         image: '/products/zapatoHombre/1.jpg',
//         descriptionBanner: 'this mi description',
//         typeBanner: 'big-1',
//         color: '#C0D690',
//         titleBanner: 'zapato hombre'
//       }
//     }
//   ]
    
const Banner = async({products}) => {
    // console.log('this products', products.data)
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