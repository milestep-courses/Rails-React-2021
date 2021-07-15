import React from 'react';
import styles from './styles.module.sass';

export const NotFoundPage = () => {
  console.log('NotFound component render');

  return <div className={styles.notFound}>404 not found</div>;
};
