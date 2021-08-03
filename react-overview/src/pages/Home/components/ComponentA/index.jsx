import React from 'react';
import styles from '../../styles.module.sass';
import { ComponentsB } from '../ComponentB';

export const ComponentsA = () => {
  console.log('ComponentsA component render');
  return (
    <div className={styles.home__section}>
      Component A<ComponentsB />
    </div>
  );
};
