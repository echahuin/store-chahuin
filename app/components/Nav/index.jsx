"use client"
import React from 'react'
import Image from 'next/image'
import styles from './nav.module.scss';
import Link from 'next/link'
import { useCartContext } from '@/app/context/CartContext';

function Nav() {

    const { cart } = useCartContext()

  return (
    <div className={styles.contNav}>
        <Link href={'/'}>
            <div className={`${styles.contLogo} w-16 md:w-24 lg:w-32`} >
                <Image
                    src="/logoBlack.png"
                    width={105}
                    height={105}
                    alt="img logo"
                />
            </div>
        </Link>
        <div className={styles.contTools} >
                <input type="search" className={styles.searchInput} placeholder="Buscar" />
                <Image src="/searchBlack.png" width={25} alt='search img' height={25} className={styles.searchIcon} onClick={()=>addToCart({exito:"exito"})}/>
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