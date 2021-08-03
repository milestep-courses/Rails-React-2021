import React from 'react';
import styles from '../../styles.module.sass';
//import function that used useContext hook and AuthContext
import { useAuth } from '../../../../context/AuthContext';

export const ComponentsD = () => {
  console.log('ComponentsD component render');

  //get Auth context object
  console.log(useAuth());

  //Get current user
  const { currentUser } = useAuth();

  return (
    <div className={styles.home__section}>
      Component D<div>{currentUser && <span>Hello, {currentUser}</span>}</div>
    </div>
  );
};
