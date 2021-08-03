import React from 'react';
import styles from '../../styles.module.sass';
import { ComponentsD } from '../ComponentD';

export const ComponentsC = () => {
  console.log('ComponentsC component render');
  return (
    <div className={styles.home__section}>
      Component C<ComponentsD />
    </div>
  );
};
