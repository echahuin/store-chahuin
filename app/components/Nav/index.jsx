"use client"
import React from 'react'
import Image from 'next/image'
import styles from './nav.module.scss';
import Link from 'next/link'
import { useCartContext } from '@/app/context/CartContext';
import { useAuthContext } from '@/app/context/AuthContext';
import ButtonLogout from '../UI/ButtonLogout';


function Nav() {

    const { cart } = useCartContext()
    const { user } = useAuthContext()

  return (
    <div className={styles.contNav}>
        <Link href={'/'}>
            <div className={`${styles.contLogo} w-16 md:w-24 lg:w-32`} >
                <Image
                    src={"/logoBlack.png"}
                    width={90}
                    height={90}
                    alt="img logo"
                />
            </div>
        </Link>
        <div className={styles.contTools} >
            
            { user.logged ? <div className={styles.contDataUser}>
            
                { user.rol === 'admin' && 
                    <div className={styles.contLinkAdmin}>
                        <Link href={'/admin'}><span>Panel</span></Link>
                    </div>
                }
                <div className={styles.contLogOut}>
                    <ButtonLogout text={'Salir'}/>
                </div>
                <div className={`${styles.contUser} w-7 md:w-24 lg:w-32`}>
                { user.photoURL?
                        <Image
                            src={user.photoURL}
                            width={45}
                            height={45}
                            alt="img logo"
                        />:
                        <Image
                            src="/user.png"
                            width={45}
                            height={45}
                            alt="img logo"
                        />}
                    <span>{user.displayName}</span>
                </div>
                </div>
                
                :
                <Link href={'/LoginOrRegister'}>
                    <div className={styles.login}>
                        <span>Iniciar Sesión</span>
                    </div>
                </Link>
            }
            <div className={styles.contCart} >
                <Link href={'/cart'}>
                    <div className=' w-7 md:w-24 lg:w-32'>
                        <Image
                            src="/carrito.png"
                            width={30}
                            height={30}
                            alt="img logo"
                            />
                            {
                                cart.length && 
                                <div className={styles.totalItemCart} ><span>{cart.length}</span></div>
                            }
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav