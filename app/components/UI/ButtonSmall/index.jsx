"use client"
import React, {useState} from 'react';
import style from './buttonSmall.module.scss';

const ButtonSmall = ({ type='', onClick, text, disabled=false }) => {
  
  const styleDisableButton = {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
    boxShadow: "0px 0px 5px 0px rgba(254, 254, 254, 0.75)"

  };
  const [loading, setLoading] = useState(false);

  const setDisable = () => {
    const id = setInterval(setLoading(true), 4000);
    setTimeout(() => {
      clearInterval(id);
      setLoading(false)
    }, 6000);
  }

  return (
  <div onClick={setDisable} >
    <button type={type} className={style.button} style={
      disabled ? styleDisableButton : {}
    } onClick={onClick}>
      <div  className={loading ? `${style.loadingButton}`: ''} >
      {text}
  </div>
    </button>
      </div>
  );
};

export default ButtonSmall;
