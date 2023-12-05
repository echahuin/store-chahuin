import styles from './card.module.scss';
import React from 'react';
import Image from 'next/image';

function Card({ data }) {
  const { name, title, description, price, img, inStock } = data;


  const truncatedDescription =
    description && description.length > 30
      ? description.substring(0, 30) + '...'
      : description;

  return (
    <div className={styles.card}>
      <div className={styles.contImgCard}>
        <Image
          className={styles.imgCard}
          style={{ objectFit: 'cover', position: 'relative' }}
          src={img}
          width={390}
          height={150}
          alt={`img ${name}`}
        />
      </div>
      <div className={styles.descriptionCard}>
        <h1>{title}</h1>
        <p>{truncatedDescription}</p>
        <div className={styles.footerData}>
          <span>Stock: {inStock}</span>
          <h3>{price}$</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
