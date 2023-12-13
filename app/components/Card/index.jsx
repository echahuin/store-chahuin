import styles from './card.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Card({ data }) {
  console.log(data)
  const {slug, name, title, description, price, img, inStock } = data;

  const truncatedDescription =
    description && description.length > 30
      ? description.substring(0, 30) + '...'
      : description;

  return (
    <Link href={`/product/description/${slug}`}>
      <div className={`${styles.card} group relative text-sm `}>
        <div className={styles.contImgCard}>
          <Image
            className={`${styles.imgCard} aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100 group-hover:opacity-75`}
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
    </Link>
  );
}

export default Card;
