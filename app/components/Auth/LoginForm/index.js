"use client"
import React, {useState} from 'react'
import styles from './styles.module.scss'
import ButtonSmall from '@/app/components/UI/ButtonSmall'
import { useAuthContext } from '@/app/context/AuthContext'

const LoginForm = () => {

    const { registerUser, loginUser } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(values);
        console.log(values);
    }

  return (
    <div className={styles.contLoginForm}>
        <form className="bg-gradient(from-red to-blue)" onSubmit={handleSubmit}>
            <div className="pt-40">
                <div className="border-b border-gray-900/10 pb-8 pt-11">
                    <h2 className="text-center font-semibold leading-7 text-gray-900 pb-5">Login</h2>
                    <div className="mt-19 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
							<label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
							<div className="mt-2">
									<input 
										onChange={handleChange}
										value={values.email}
										type="email" 
										name="email" 
										id="email-data"
										required
										placeholder='example@gmail.com'
										autocomplete="email" 
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
							</div>
                        </div>

                        <div className="sm:col-span-3">
    						<label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
    						<div className="mt-2">
    								<input 
    									onChange={handleChange}
    									value={values.password}
    									type="text" 
    									name="password" 
    									id="password"
    									required
    									placeholder='********'
    									autocomplete="password"
    									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    						</div>
                        </div>
                    </div>
                </div>
            </div>
		    	<div  className={styles.contButton}>
		    		<ButtonSmall  type="submit" text="Login" />
                    {/* <ButtonSmall  onClick={()=>registerUser(values)} text="Login" /> */}
		    	</div>
        </form>
    </div>
  )
}

export default LoginForm