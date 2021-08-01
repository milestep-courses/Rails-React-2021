import React from 'react';
import styles from '../../styles.module.sass';
import PropTypes from 'prop-types';
import { ComponentsC } from '../ComponentC';

export const ComponentsB = ({ user }) => {
  console.log('ComponentsB component render');
  return (
    <div className={styles.home__section}>
      Component B
      <ComponentsC user={user} />
    </div>
  );
};

ComponentsB.propTypes = {
  user: PropTypes.string,
};
