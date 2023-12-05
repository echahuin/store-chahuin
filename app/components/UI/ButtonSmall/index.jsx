"use client"
import React from 'react';
import style from './buttonSmall.module.scss';

const ButtonSmall = ({ onClick, text }) => {
 
  return (
    <div className={style.button} onClick={onClick}>
      {text}
    </div>
  );
};

export default ButtonSmall;
