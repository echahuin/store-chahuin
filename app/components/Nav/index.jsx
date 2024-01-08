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
            <div className={`${styles.contLogo} w-12 md:w-24 lg:w-32`} >
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
                <div className={`${styles.contUser} w-8 md:w-24 lg:w-32`}>
                { user.photoURL?
                        <Image
                            src={user.photoURL}
                            width={45}
                            height={60}
                            alt="img Photo url"
                        />:
                        <Image
                            src="/user.png"
                            width={45}
                            height={45}
                            alt="img logo user"
                        />}
                    <span>{user.displayName}</span>
                </div>
                </div>
                
                :
                    <div className={styles.login}>
                        <Link href={'/LoginOrRegister'}>
                            <span>Iniciar Sesión</span>
                        </Link>
                    </div>
            }
            <div className={styles.contCart} >
                <Link href={'/cart'}>
                    <div className=' w-8 md:w-24 lg:w-32'>
                        <Image
                            src="/carrito.png"
                            width={30}
                            height={30}
                            alt="img cart"
                            />
                            {
                                cart.length === 0 ? null : <div className={styles.totalItemCart} ><span>{cart.length}</span></div>
                            }
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Nav