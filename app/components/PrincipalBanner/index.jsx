import React from 'react'
import Image from 'next/image'
import styles from './principalBanner.module.scss';

function PrincipalBanner() {
  return (
    <div className={styles.PrincipalBanner}>
      <div className={styles.contBannerImg}>
          <Image
              style={{objectFit: "cover"}}
              src="/electronics.jpg"
              fill={true}
              alt="electronics banner"
              />
      </div>
    </div>
  )
}

export default PrincipalBanner