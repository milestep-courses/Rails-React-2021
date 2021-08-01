import React from 'react';
import styles from './styles.module.sass';
import img from '../../img/chart.png';

export const Chart = () => {
  console.log('Chart component render');

  //check performance
  const PI = 3.14;
  const t0 = performance.now();
  const aggregateSomeData = () =>
    Array.from(Array(30000000).keys())
      .filter((el) => el % 1500 === 0)
      .map((el) => el * PI);
  aggregateSomeData();
  const t1 = performance.now();
  console.log('Call to aggregateSomeData took ' + (t1 - t0) + ' milliseconds.'); //1000 ms in sec

  return (
    <div className={styles.chart}>
      <div>Chart Component</div>
      <img src={img} alt="chart" className={styles.chart__img} />
    </div>
  );
};
