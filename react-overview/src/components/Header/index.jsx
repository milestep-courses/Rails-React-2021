import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sass';

export const Header = ({ user, setUser }) => {
  const [name, setName] = useState('');
  console.log('Header component render');

  const onSubmit = (event) => {
    console.log('Submit form');
    event.preventDefault();
    setUser(name);
  };

  const onChangeName = ({ currentTarget: { value } }) => setName(value);

  return (
    <div className={styles.header}>
      Header component
      <div className={styles.header__form}>
        <form onSubmit={onSubmit}>
          <input placeholder="email" value={name} onChange={onChangeName} />
          <button type="submit" className={styles.header__formButton}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
};
