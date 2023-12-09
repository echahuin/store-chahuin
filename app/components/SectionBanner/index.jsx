import React from 'react'
import BannerSmall from '../BannerSmall'
import styles from './sectionBanner.module.scss';
import  getDataBanner  from '../../utils/getDataBanner'

const SectionBanner = async({type}) => {

  const bigBannerData = await getDataBanner(type);

  return (
        <section className={styles.contSectionBanner}>
          {bigBannerData.map((product, index) => <BannerSmall key={index} data={product} />)}
        </section>
    )
}

export default SectionBanner