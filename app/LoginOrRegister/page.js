"use client";
import React, { useState } from 'react'
import LoginClient from '../components/Forms/LoginClient';
import RegisterClient from '../components/Forms/RegisterClient';
import styles from './styles.module.scss'
import Image from 'next/image'

const LoginOrRegister = () => {

    const [typeFormLogin, setTypeFormLogin] = useState(false)

 return (
  <div className={styles.contLoginOrOrder}>
      {
        typeFormLogin ? <LoginClient /> : <RegisterClient />
      }
      <div className="text-center font-semibold leading-7 text-gray-900 pt-9">
          <p>¿Ya tienes una cuenta?</p>
          <div className='cursor-pointer text-blue-500'  onClick={()=>setTypeFormLogin(!typeFormLogin)}>
              { !typeFormLogin ?  <p >Inicia sesión</p> : <p>Registarse</p> }
          </div>
      </div>
      <div className={styles.contLoginGoogle}>
        <div className={styles.loginGoogle}>
            <Image src={'/icon-google.svg'} height={35} width={35} alt='icon-google'/>
            <p className="text-center font-semibold leading-7 text-gray-900 pt-9"> Ingresár con google</p>
        </div>
      </div>
 </div>)
}
export default LoginOrRegister