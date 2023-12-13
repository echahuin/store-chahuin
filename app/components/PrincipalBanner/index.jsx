"use client"
import React from 'react'
import Image from 'next/image'
import styles from './principalBanner.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrincipalBanner() {

  const settings = {
    dots: true,
	  fade:true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
	  arrows: false,    
  };

  return (
    <div className={styles.PrincipalBanner}>
      <Slider {...settings}>
      <div className={styles.contBannerImg}>
          <Image
              layout="responsive"
              style={{objectFit: "cover"}}
              src="/1.png"
              // fill={true}
              width={100}
              height={100}
              alt="electronics banner"
              />
      </div>
      <div className={styles.contBannerImg}>
          <Image
              layout="responsive"
              style={{objectFit: "cover"}}
              src="/2.png"
              // fill={true}
              width={100}
              height={100}
              alt="electronics banner"
              />
      </div>
      <div className={styles.contBannerImg}>
          <Image
              layout="responsive"
              style={{objectFit: "cover"}}
              src="/3.png"
              // fill={true}
              width={100}
              height={100}
              alt="electronics banner"
              />
      </div>
      </ Slider>
    </div>
  )
}

export default PrincipalBanner