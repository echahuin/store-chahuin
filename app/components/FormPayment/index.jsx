"use client"
import React, {useEffect, useState} from 'react';
import ButtonSmall from '../UI/ButtonSmall';
import { usePaymentContext } from '@/app/context/PaymentContext';
import { useRouter } from 'next/navigation'


const FormPayment = () => {

  const {payment, addToPayment } = usePaymentContext()
  const router = useRouter()

  useEffect(() => {
    if(payment.name !== ''){
      setValues(payment)
      router.push('/order')
    }
  }, [payment, router]);

  const [values, setValues] = useState({
    name: '',
    numberCard: '',
    month: '',
    year:'',
    cvv: ''
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
    addToPayment(values);
    payment.name !== '' && router.push('/order')
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <div className="border-b border-gray-900/10 pb-8 pt-11">
          <h2 className="text-center font-semibold leading-7 text-gray-900 pb-5">Datos de tu tarjeta</h2>
          <div className="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
              <div className="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder='Nombre Completo'
                  autocomplete="given-name" 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label for="numberCard" className="block text-sm font-medium leading-6 text-gray-900">Numero de la tarjeta</label>
              <div className="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="numberCard" 
                  id="numberCard" 
                  placeholder='xxxx-xxxx-xxxx-xxxx' 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            
            <div className="sm:col-span-2 sm:col-start-1">
              <label for="month" className="block text-sm font-medium leading-6 text-gray-900">Mes de expiracion</label>
              <div className="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="month" 
                  id="month" 
                  placeholder='xx'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label for="year" className="block text-sm font-medium leading-6 text-gray-900">Año de expiracion</label>
              <div className="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="year"
                  placeholder='xxxx'
                  id="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label for="cvv" className="block text-sm font-medium leading-6 text-gray-900">CVV</label>
              <div className="mt-2">
                <input 
                  onChange={handleChange} 
                  type="text" 
                  name="cvv"
                  placeholder='xxx'
                  id="cvv"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link href={'/order'}> */}
        <ButtonSmall type="submit" text="Comprar" />
      {/* </Link> */}
    </form>
  );
};

export default FormPayment;
