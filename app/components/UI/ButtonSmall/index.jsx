"use client"
import React from 'react';
import style from './buttonSmall.module.scss';

const ButtonSmall = ({ onClick, text, disabled=false }) => {
  
  const styleDisableButton = {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
    boxShadow: "0px 0px 5px 0px rgba(254, 254, 254, 0.75)"

  };

  return (
    <div className={style.button} style={
      disabled ? styleDisableButton : {}
    } onClick={onClick}>
      {text}
    </div>
  );
};

export default ButtonSmall;
