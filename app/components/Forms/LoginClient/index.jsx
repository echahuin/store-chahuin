"use client"
import React, { useState}  from 'react'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import styles from './styles.module.scss'
import { useAuthContext } from '@/app/context/AuthContext'


const LoginClient = () => {
  
  const { loginUser } = useAuthContext()
  const [values, setValues] = useState({
    displayName: '',
    email: '',
    password: '',
    photoURL: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values);
  };

  return (
    <div className={styles.contTypeLogin}>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-gray-900/10 p-5 pb-8 pt-11">
            <h2 className="text-center font-semibold leading-7 text-gray-900 pb-9">Ingresá</h2>
            <div className="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                  <input onChange={handleChange} type="text" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="mt-2">
                  <input onChange={handleChange} type="password" name="password" id="password" autocomplete="phone-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonSmall type="submit" text="Ingresar" />
      </form>
    </div>
  );
}

export default LoginClient