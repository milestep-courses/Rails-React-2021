import React, { useEffect, useState } from 'react';
import styles from './styles.module.sass';
import img from '../../img/chart.png';
import PropTypes from 'prop-types';

const Chart = () => {
  console.log('Chart component render');
  const [aggregatedData, setAggregatedData] = useState('');

  //check performance
  const onAggregateSomeData = () => {
    const PI = 3.14;
    const t0 = performance.now();
    const aggregateSomeData = () =>
      Array.from(Array(30000000).keys())
        .filter((el) => el % 10000000 === 0)
        .map((el) => el * PI)
        .join(',');
    const aggregatedData = aggregateSomeData();
    const t1 = performance.now();
    console.log('Call to aggregateSomeData took ' + (t1 - t0) + ' milliseconds.'); //1000 ms in sec
    return aggregatedData;
  };

  //Hooks are async and don't block render
  useEffect(() => {
    const aggregatedData = onAggregateSomeData();
    setAggregatedData(aggregatedData);
  }, []);

  return (
    <div className={styles.chart}>
      <div>Chart Component</div>
      <img src={img} alt="chart" className={styles.chart__img} />
      {aggregatedData}
    </div>
  );
};

Chart.propTypes = {
  value: PropTypes.number,
};

export default Chart;
