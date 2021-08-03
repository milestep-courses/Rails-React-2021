import React from 'react';
import styles from './styles.module.sass';
import { useAuth } from '../../context/AuthContext';

export const Footer = () => {
  const { increment } = useAuth();
  console.log('Footer component render');
  return (
    <div className={styles.footer}>
      Footer component<button onClick={increment}>Increment Value</button>
    </div>
  );
};
