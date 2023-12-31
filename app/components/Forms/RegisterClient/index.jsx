"use client"
import React, {useState} from 'react'
import styles from './styles.module.scss'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import { useAuthContext } from '@/app/context/AuthContext'

const RegisterClient = () => {

    const { registerUser } = useAuthContext();
    
    const [file, setFile] = useState(null)
    const [alertMessage, setAlertMessage] = useState();
    const [values, setValues] = useState({
      displayName: '',
      email: '',
      password: '',
      photoURL: '',
      phoneNumber: '',
    });
  
    const handleChange = (e) => {
      setValues({ 
        ...values, 
        [e.target.name]: e.target.value 
      })
    }
    const updateMessage = (msg) => {
      setAlertMessage(msg)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const ret = await registerUser(values, file);
      if(ret?.ok){
        location.href = "/";
      }if(ret?.error?.code === 'auth/email-already-in-use'){
        const id = setInterval(updateMessage('Ya estas registrado'), 2000);
        setTimeout(() => {
          clearInterval(id);
          setAlertMessage('')
        }, 4000);
      }
      if(ret.error.code === 'auth/invalid-email'){
        const id = setInterval(updateMessage('Email incorrecto'), 2000);
        setTimeout(() => {
          clearInterval(id);
          setAlertMessage('')
        }, 4000);
      }
      if(ret.error.code === 'auth/weak-password'){
        const id = setInterval(updateMessage('Password incorrecto'), 2000);
        setTimeout(() => {
          clearInterval(id);
          setAlertMessage('')
        }, 4000);
      }
    };
  
    return (
      <div className={styles.contTypeRegister}>
     
      <form onSubmit={handleSubmit}>
          <div>
            <div className=" border-gray-900/10 p-5 pb-8 pt-11">
            <h2 className="text-center font-semibold leading-7 text-gray-900 pb-9">Registrate</h2>
            <div className="mt-19 grid grid-cols-1 gap-x-2 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label for="displayName" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div className="mt-2">
                  <input onChange={handleChange} placeholder='Nombre' type="text" name="displayName" id="displayName" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label for="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Número de telefono</label>
                <div className="mt-2">
                  <input onChange={handleChange} placeholder='1112345678' type="text" name="phoneNumber" id="phoneNumber" autocomplete="phone-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div className="mt-2">
                  <input onChange={handleChange} placeholder='example@gmail.com' type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="mt-2">
                  <input onChange={handleChange} placeholder='********' type="password" name="password" id="password" autocomplete="phone-number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label for="file" className="block text-sm font-medium leading-6 text-gray-900">Foto de perfil</label>
                <div className="mt-2">
                  <input 
                    type="file" 
                    accept="image/*" 
                    allowMultiple={false}
                    required
                    className={styles.fotoPerfilInput}
                    onChange={(e) => setFile(e.target.files[0])}
                  />               
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.alignButton} >
          <div className={styles.widthButton}>
            <ButtonSmall type="submit" text="Registrarme" />
          </div>
        </div>
      </form>
      <div className={styles.alert}>
        {alertMessage}
      </div>
      </div>
    );
}

export default RegisterClient