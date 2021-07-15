import React from 'react';
import styles from './styles.module.sass';
import PageWrapper from '../../containers/PageWrapper';

export const HomePage = () => {
  console.log('Home component render');

  return (
    <PageWrapper>
      <div className={styles.home}>Home component</div>
    </PageWrapper>
  );
};
