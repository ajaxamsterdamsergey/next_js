import React from 'react';
import styles from '@/components/loader/loader.module.scss';
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderText}>Loading...</div>
    </div>
  );
};

export default Loader;
