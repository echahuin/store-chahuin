import React from 'react'
import BannerSmall from '../BannerSmall'
import styles from './sectionBanner.module.scss';

const SectionBanner = async({products}) => {
  console.log(products.data)

  return (
        <section className={styles.contSectionBanner}>
          {products.data.map((product, index) => <BannerSmall key={index} data={product} />)}
        </section>
    )
}

export default SectionBanner