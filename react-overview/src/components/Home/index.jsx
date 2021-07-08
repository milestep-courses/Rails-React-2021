import React from 'react';
import styles from './styles.module.sass';

export const Home = () => {
  console.log('Home component render');
  return <div className={styles.home}>Home component</div>;
};
