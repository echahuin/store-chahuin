import React from 'react'
import style from './buttonSmall.module.scss'

const ButtonSmall = ({text}) => {
  return (
    <div className={style.button}>{text}</div>
  )
}

export default ButtonSmall