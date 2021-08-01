import React from 'react';
import styles from '../../styles.module.sass';
import PropTypes from 'prop-types';

export const ComponentsD = ({ user }) => {
  console.log('ComponentsD component render');
  return (
    <div className={styles.home__section}>
      Component D{user && <div className={styles.home__username}>Hello, {user}</div>}
    </div>
  );
};

ComponentsD.propTypes = {
  user: PropTypes.string,
};
