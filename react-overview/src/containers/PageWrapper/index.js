import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sass';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const PageWrapper = ({ children }) => {
  console.log('PageWrapper');

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node,
};
