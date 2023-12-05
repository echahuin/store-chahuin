import React from 'react'
import styles from './styles.module.scss'
import TemplateCar from '../TemplateCar'

const ListProduct = ({data}) => {
  return (
    <div className={styles.contCarDetail} >
        <div className={styles.contTemplate}>
        { 
            data.map((item, index)=>{
                return <TemplateCar key={index} data={item}/>
            })
        }
        </div>
        <div className={styles.contTotal}>
            <h1> 
                Total 1200$

            </h1>
        </div>
    </div>
  )
}

export default ListProduct