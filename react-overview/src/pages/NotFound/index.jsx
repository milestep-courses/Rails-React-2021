import React from 'react';
import styles from './styles.module.sass';
import PageWrapper from '../../containers/PageWrapper';

export const NotFoundPage = () => {
  console.log('NotFound component render');

  return (
    <PageWrapper>
      <div className={styles.notFound}>404 not found</div>
    </PageWrapper>
  );
};
