import React from 'react';
import styles from '../../styles.module.sass';
import PropTypes from 'prop-types';
import { ComponentsB } from '../ComponentB';

export const ComponentsA = ({ user }) => {
  console.log('ComponentsA component render');
  return (
    <div className={styles.home__section}>
      Component A
      <ComponentsB user={user} />
    </div>
  );
};

ComponentsA.propTypes = {
  user: PropTypes.string,
};
