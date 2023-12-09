import React from 'react'
import BannerSmall from '../BannerSmall'
import styles from './sectionBanner.module.scss';
import getDataBanner from '../../utils/getDataBanner';

const  SectionBanner = async () => {

  const bigBannerData = await getDataBanner('small-1');

  // console.log('this bigBannerData', bigBannerData)

  // const response = await fetch(`http://localhost:3000/api/typeBanners/small-1`);  
  // console.log('this bigBannerData', 'small-1')
  // console.log('response', response.json())
  return (
        <section className={styles.contSectionBanner}>
          {bigBannerData.map((product, index) => <BannerSmall key={index} data={product} />)}
        </section>
    )
}

export default SectionBanner