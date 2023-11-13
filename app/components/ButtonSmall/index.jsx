import React from 'react'
import style from './buttonSmall.module.scss'

const ButtomSmall = ({text}) => {
  return (
    <div className={style.button}>{text}</div>
  )
}

export default ButtomSmall