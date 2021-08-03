import React from 'react';
import styles from '../../styles.module.sass';
import { ComponentsC } from '../ComponentC';

export const ComponentsB = () => {
  console.log('ComponentsB component render');
  return (
    <div className={styles.home__section}>
      Component B<ComponentsC />
    </div>
  );
};
