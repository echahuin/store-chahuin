"use client"
import React from 'react';
import style from './buttonLogout.module.scss';
import { useAuthContext } from '@/app/context/AuthContext'
// import { useRouter } from 'next/navigation'

const ButtonLogout = ({ text }) => {

  const { logoutUser } = useAuthContext()
  // const router = useRouter()
  
  const handleLogout = () => {
    logoutUser()
    // router.push('/')
  }

  return (
    <button className={style.button} onClick={()=>handleLogout()}>
      {text}
    </button>
  );
};

export default ButtonLogout;
