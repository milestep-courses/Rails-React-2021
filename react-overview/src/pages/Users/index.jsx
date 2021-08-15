import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.sass';
import { changeUserWebsite } from '../../store/actionCreators/user';

export const UsersPage = () => {
  const dispatch = useDispatch();
  console.log('Users component render');
  const onChangeWebsite = () => dispatch(changeUserWebsite(`www${Math.random()}.com`));

  return (
    <div className={styles.users}>
      Users component
      <button onClick={onChangeWebsite}>Change user website</button>
    </div>
  );
};
