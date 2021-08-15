import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.sass';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const userName = useSelector((state) => state.user.name);
  const isAuthorized = useSelector((state) => state.user.isAuthorized);
  const [name, setName] = useState('');
  //get login function from our custom hook
  const { login } = useAuth();

  console.log('Header component render');

  const onSubmit = (event) => {
    console.log('Submit form');
    event.preventDefault();
    login(name);
  };
  const onChangeName = ({ currentTarget: { value } }) => setName(value);

  return (
    <div className={styles.header}>
      Header component
      {isAuthorized ? (
        <div> Hello, {userName}</div>
      ) : (
        <div className={styles.header__form}>
          <form onSubmit={onSubmit}>
            <input placeholder="email" value={name} onChange={onChangeName} />
            <button type="submit" className={styles.header__formButton}>
              Sign in
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
