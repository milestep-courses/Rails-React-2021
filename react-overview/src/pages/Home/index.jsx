import React from 'react';
import styles from './styles.module.sass';
import { ComponentsA } from './components/ComponentA';
import Chart from '../../components/Chart';

export const HomePage = () => {
  console.log('Home component render');
  return (
    <div className={styles.home}>
      Home component
      <ComponentsA />
      <Chart />
    </div>
  );
};
