import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Image
        src={'/loading.svg'}
        alt='loading'
        width={50}
        height={50}
        className={styles.loadingSpinner}
      />
      Loading...
    </div>
  );
};

export default Loading;
