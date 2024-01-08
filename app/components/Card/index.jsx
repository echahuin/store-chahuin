import styles from './card.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import truncateWords from '@/app/tools/truncateWords';

function Card({ data }) {

  const {slug, name, title, description, price, img, stock } = data;

  return (
    <Link href={`/product/description/${slug}`}>
      <div className={`${styles.card} group relative text-sm `}>
        <div className={styles.contImgCard}>
          <Image
            className={`${styles.imgCard} overflow-hidden bg-gray-100 group-hover:opacity-75`}
            style={{ objectFit: 'cover', position: 'relative' }}
            src={img}
            width={390}
            height={150}
            alt={`img ${name}`}
            />
        </div>
        <div className={styles.descriptionCard} style={stock != 0 ? {}: { }}>
          <h1>{truncateWords(title, 20)}</h1>
          <p>{truncateWords(description, 60)}</p>
          <div className={styles.footerData}>
            <span style={stock != 0 ? {}: { color: 'red'}} >Stock: {stock}</span>
            <h3>{price}$</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
