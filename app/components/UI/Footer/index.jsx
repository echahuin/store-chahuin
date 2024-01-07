import React from 'react'
import Image from 'next/image'
import classes from './footer.module.scss';
import Link from 'next/link'

function footer() {

    return (
      <div id="contacto" >
        <div className={classes.footer}>
          <h2>Contáctanos</h2>
          <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
          <div className={classes.infoContact} > 
            <Image src={'/social/mail.png'} height={20} width={20} alt='mail' />
            <p>chahuin.store@gmail.com</p>
          </div>
          <div className={classes.infoContact}>
            <Image src={'/social/whatsapp.png'} height={20} width={20} alt='whats app'/>
            <p>+541234567897</p>
          </div>
          <div className={classes.infoContact}>
            <Image src={'/social/placeholder.png'} height={20} width={20} alt='localidad'/>
            <p>Av. Bartolome Mitre, CABA, Buenos Aires</p>
          </div>
          <h2>Sigamos Conectados</h2>
          <p>Si quieres estar al tanto de nuestras novedades, síguenos en nuestras redes sociales.</p>
          <div className={classes.socialContact}>
            <Link href={'https://www.facebook.com'} ><Image src={'/social/facebook.png'} alt='facebook' height={50} width={50} /> </Link>
            <Link href={'https://instagram.com'} ><Image src={'/social/instagram.png'} alt='instagram' height={50} width={50} /> </Link>
            <Link href={'tiktok.com'} ><Image src={'/social/tiktok.png'} height={50} width={50} alt='tiktok' /> </Link>
          </div>
        </div>
        <div className={classes.finFooter} >
            <p>© 2024 - Todos los derechos reservados</p>
            <p>creado por dev-chahuin</p>
        </div>
      </div>
    )
}

export default footer