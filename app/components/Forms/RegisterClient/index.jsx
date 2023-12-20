import React, {useState} from 'react'
import styles from './styles.module.scss'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import { useAuthContext } from '@/app/context/AuthContext'

const RegisterClient = () => {

    const { registerUser } = useAuthContext();
    
    const [file, setFile] = useState(null)
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
      // console.log('values', values)
      registerUser(values);
    };
  
    return (
      <div className={styles.contTypeRegister}>
      <form onSubmit={handleSubmit}>
          <div>
            <div className="border-b border-gray-900/10 pb-8 pt-11">
            <h2 class="text-center font-semibold leading-7 text-gray-900 pb-9">Necesitas Registrate</h2>
            <div class="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="displayName" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                <div class="mt-2">
                  <input onChange={handleChange} type="text" name="displayName" id="displayName" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="phoneNumber" class="block text-sm font-medium leading-6 text-gray-900">Número de telefono</label>
                <div class="mt-2">
                  <input onChange={handleChange} type="text" name="phoneNumber" id="phoneNumber" autocomplete="phone-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <input onChange={handleChange} type="text" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div class="mt-2">
                  <input onChange={handleChange} type="text" name="password" id="password" autocomplete="phone-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div class="sm:col-span-4">
                <label for="file" class="block text-sm font-medium leading-6 text-gray-900">Foto de perfil</label>
                <div class="mt-2">
                  <input 
                    type="file" 
                    accept="image/*" 
                    allowMultiple={false}
                    required 
                    className='block w-full border p-2 my-2' 
                    onChange={(e) => setFile(e.target.files[0])}
                  />               
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonSmall type="submit" text="Registrarme" />
      </form>
    
      <div>
        
      </div>
      </div>
    );
}

export default RegisterClient