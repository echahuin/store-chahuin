"use client"
import React, {useState} from 'react';
import ButtonSmall from '../UI/ButtonSmall';


//este tiene que ser un formulario de payment no de register

const Form = ({ onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
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
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-gray-900/10 pb-8 pt-11">
          <h2 class="text-center font-semibold leading-7 text-gray-900 pb-5">Datos de tu tarjeta</h2>
          <div class="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
              <div class="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder='Nombre Completo'
                  autocomplete="given-name" 
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="numberCard" class="block text-sm font-medium leading-6 text-gray-900">Numero de la tarjeta</label>
              <div class="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="numberCard" 
                  id="numberCard" 
                  placeholder='xxxx-xxxx-xxxx-xxxx' 
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="month" class="block text-sm font-medium leading-6 text-gray-900">Mes de expiracion</label>
              <div class="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="month" 
                  id="month" 
                  placeholder='xx'
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="year" class="block text-sm font-medium leading-6 text-gray-900">Año de expiracion</label>
              <div class="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="year"
                  placeholder='xxxx'
                  id="year"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">CVV</label>
              <div class="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="cvv"
                  placeholder='xxx'
                  id="cvv"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonSmall type="submit" text="Comprar" />
    </form>
  );
};

export default Form;
