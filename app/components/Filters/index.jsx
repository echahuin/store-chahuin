"use client"
import React, {useState, useEffect} from 'react';
import styles from './filters.module.scss';
import { useProductDataContext } from '@/app/context/ProductDataContext'
import ButtonSmall from '@/app/components/UI/ButtonSmall'

const Filters = ({productsData, children}) => {
const [searchData, setSearchData] = useState('all');
const { handleFilterData, setProducts } = useProductDataContext()
const [values, setValues] = useState({});

useEffect(() => {
  
  if(searchData === 'all'){
    setProducts(productsData)
    setSearchData('')
  }
}, [productsData, searchData, setProducts]);


  const handleChange = ( e ) => {
    setValues({ 
      ...values, 
      [e.target.name]: e.target.value 
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    handleFilterData(values)
  }
  
  const setData = () => {
    setValues({
      priceMax: '',
      search: ''
    })
    setSearchData('all')
  }
    
  
  
  return (
  <div className={styles.contDetail} >
    <div className={styles.contFilters} >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputMax} >
          <input
            onChange={handleChange}
            name="priceMax" 
            type="number" 
            className={styles.inputStyle} 
            placeholder="max price" 
            />
        </div>  
        
        <div className={styles.contSearch}>
          <input
            onChange={handleChange}
            type="text"
            name="search" 
            className={styles.inputStyle} 
            placeholder="Buscar" 
            />
        </div>
        <div className={styles.button} >
          <ButtonSmall type="submit" text="filtrar" />
        </div>
        <div className= {`${styles.setButton} pt-3`} >
          <ButtonSmall onClick={setData} text="Mostrar Todos" />
        </div>
      </form>
    </div>
    <div>
      {children}
    </div>
  </div>
  )
}

export default Filters
