import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.sass';
import { useAuth } from '../../context/AuthContext';

export const Footer = () => {
  const { increment } = useAuth();
  console.log('Footer component render');
  const website = useSelector((state) => state.user.website);

  return useMemo(() => {
    return (
      <div className={styles.footer}>
        Footer component
        <div>This is our website: {website}</div>
        <button onClick={increment}>Increment Value</button>
      </div>
    );
  }, [website]);
};
