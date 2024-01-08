"use client"
import React, { useEffect, useState } from 'react'
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
  
  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
  
    const windowWidth = window.innerWidth;
    if(windowWidth > 1024) { 
      setImageSrc(["/bannerDesktop/1.png", "/bannerDesktop/2.png", "/bannerDesktop/3.png"]);
    }

    if (windowWidth <= 1024) {
      setImageSrc(["/bannerTablet/1.png", "/bannerTablet/2.png", "/bannerTablet/3.png"]);
    }

    if (windowWidth <= 768) {
      setImageSrc(["/bannerMobile/1.png", "/bannerMobile/2.png", "/bannerMobile/3.png"]);
    }
  }, []);


  return (
    <div className={styles.PrincipalBanner}>
      <Slider {...settings}>
        { imageSrc.map((src, index)=>{
            return (
              <div key={index} className={styles.contBannerImg}>
                <Image
                  layout="responsive"
                  style={{objectFit: "cover"}}
                  src={src}
                  width={100}
                  height={100}
                  alt={`electronics banner ${index} ${src}`}
                />
              </div>
            )
          })
        }
      </ Slider>
    </div>
  )
}

export default PrincipalBanner