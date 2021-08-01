import React from 'react';
import styles from '../../styles.module.sass';
import PropTypes from 'prop-types';
import { ComponentsD } from '../ComponentD';

export const ComponentsC = ({ user }) => {
  console.log('ComponentsC component render');
  return (
    <div className={styles.home__section}>
      Component C
      <ComponentsD user={user} />
    </div>
  );
};

ComponentsC.propTypes = {
  user: PropTypes.string,
};
