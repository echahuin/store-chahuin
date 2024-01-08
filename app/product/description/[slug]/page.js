import React from 'react'
import Image from 'next/image'
import styles from './stylesDescription.module.scss'
import getProductCategorySlug from '@/app/utils/getProductCategorySlug'
import ControllerProduct from '@/app/components/ControllerProduct'
import SubCategory from '../../[category]/[subCategory]/page'


const Description = async({params}) => {

  const response = await getProductCategorySlug(params)
  const {title, img, category, subCategory, stock, description, price} = response

    return (
      <div className={styles.contDescription}>
        <div className={styles.contBannerSmallImg}>
          <Image
              style={{objectFit: "cover"}}
              src={img}
              fill={true}
              alt={`img ${img}`}
              />
        </div>
        <div className={styles.contTextBannerSmall} >
            <div className={styles.headDetail}>
              <h4>{category}-{subCategory}</h4>
              <h4 style={{color: 'red'}}>{stock === 0 ? `Stock: ${stock}`: ''}</h4>
            </div>
            <div className={styles.contDetailText} >
                <h1>{title}</h1>
                <span>{description}</span>
                <div className={styles.contPrice}>
                  <h1>
                    Price: {price}$
                  </h1>
                </div>
            </div>
            <ControllerProduct data={response}/>
        </div>
    </div>
  )
}

export default Description