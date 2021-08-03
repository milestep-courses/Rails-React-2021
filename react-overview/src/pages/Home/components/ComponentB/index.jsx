import React from 'react';
import styles from '../../styles.module.sass';
import { ComponentsC } from '../ComponentC';
import { useAuth } from '../../../../context/AuthContext';

export const ComponentsB = () => {
  console.log('ComponentsB component render');

  const { val } = useAuth();

  return (
    <div className={styles.home__section}>
      Component B<ComponentsC />
      <div>Increment val {val}</div>
    </div>
  );
};
