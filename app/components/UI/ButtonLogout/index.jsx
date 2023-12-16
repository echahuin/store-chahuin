"use client"
import React from 'react';
import style from './buttonLogout.module.scss';
import { useAuthContext } from '@/app/context/AuthContext'

const ButtonLogout = ({ text }) => {

  const { logoutUser } = useAuthContext()

  return (
    <button className={style.button} onClick={()=>logoutUser()}>
      {text}
    </button>
  );
};

export default ButtonLogout;
