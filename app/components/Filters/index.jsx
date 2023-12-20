import React from 'react';
import styles from './filters.module.scss';
import Image from 'next/image'

const Filters = () => {
  return (
    <div className={styles.contFilters} >
        <div className={styles.inputMax} >
          <input name="priceMax" type="number" className={styles.inputStyle} placeholder="max price" />
        </div>  
        
        <div className={styles.contSearch}>
          <input type="search" className={styles.inputStyle} placeholder="Buscar" />
            <Image src="/searchIcon.svg" width={30} alt='search img' height={3} className={styles.searchIcon} />
        </div>
    </div>
  )
}

export default Filters
