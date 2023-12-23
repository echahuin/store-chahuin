import React from 'react'
import BannerSmall from '../BannerSmall'
import styles from './sectionBanner.module.scss';

const SectionBanner = async({products}) => {

  return (
        <div className={styles.contSectionBanner}>
          {products && products.data.map((product, index) => <BannerSmall key={index} data={product} />)}
        </div>
    )
}

export default SectionBanner