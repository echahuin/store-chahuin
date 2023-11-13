import React from 'react'
import BannerSmall from '../BannerSmall'
import styles from './sectionBanner.module.scss';

function SectionBanner({products}) {
  return (
        <section className={styles.contSectionBanner}>
          {products.map((product, index) => <BannerSmall key={index} data={product} />)}
        </section>
    )
}

export default SectionBanner