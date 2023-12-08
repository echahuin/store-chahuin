import React from 'react'
import Image from 'next/image'
import styles from './stylesDescription.module.scss'
import getProductCategoryId from '@/app/utils/getProductCategoryId'
import ControllerProduct from '@/app/components/ControllerProduct'


const Description = async({params}) => {

  const response = await getProductCategoryId(params)
  
  const {title, img, name, description, price} = response

    return (
      <div className={styles.contDescription}>
        <div className={styles.contBannerSmallImg}>
          <Image
              style={{objectFit: "cover"}}
              src={img}
              fill={true}
              alt={`img`}
              />
        </div>
        <div className={styles.contTextBannerSmall} >
            <h4>{name}</h4>
            <div>
                <h1>{title}</h1>
                <span>{description}</span>
                <div className='p-5'>
                  <h1 >
                    <span>Price: </span>
                    {price}$
                  </h1>
                </div>
            </div>
            <ControllerProduct typeCategoryGeneral={params.category} data={response}/>
        </div>
    </div>
  )
}

export default Description