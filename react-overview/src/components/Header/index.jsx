import React from 'react';
import styles from './styles.module.sass';

export const Header = () => {
  console.log('Header component render');
  return <div className={styles.home}>Header component</div>;
};
