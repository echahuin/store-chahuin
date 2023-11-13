import React from 'react';
import styles from './filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.contFilters} >
        {/* <div> */}
        {/* <div className={styles.contCheckBox}>
          <div className={styles.filters}>
            <div className={styles.label}>
              <label htmlFor="size">Size</label>
            </div>
            <div>
              <input type="checkbox" id="sm" name="size" value="sm" className={styles.checkbox} />
              <label htmlFor="sm">Small</label>
            </div>
            <div>
              <input type="checkbox" id="md" name="size" value="md" className={styles.checkbox} />
              <label htmlFor="md">Medium</label>
            </div>
            <div>
              <input type="checkbox" id="lg" name="size" value="lg" className={styles.checkbox} />
              <label htmlFor="lg">Large</label>
            </div>
          </div>
        </div> */}
      {/* </div> */}
        <div>
            <select id="products" name="products" className={styles.select}>                
                <option value="all">All</option>
                <option value="shoes">Shoes</option>
                <option value="clothes">Clothes</option>
                <option value="accessories">Accessories</option>
            </select>
        </div>  
        <div className={styles.inputMax} >
          {/* <label htmlFor="priceMax">Precio maximo</label> */}
          <input name="priceMax" type="number" className={styles.inputMaxStyle} placeholder="max price" />
        </div>  
    </div>
  )
}

export default Filters
