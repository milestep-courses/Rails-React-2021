import React from 'react';
import styles from './styles.module.sass';
import PropTypes from 'prop-types';
import { ComponentsA } from './components/ComponentA';
import { Chart } from '../../components/Chart';

export const HomePage = ({ user }) => {
  console.log('Home component render');
  return (
    <div className={styles.home}>
      Home component
      <ComponentsA user={user} />
      <Chart />
    </div>
  );
};

HomePage.propTypes = {
  user: PropTypes.string,
};
