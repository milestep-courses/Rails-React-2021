import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from '../PageWrapper/styles.module.sass';

//Providers(Context)
//Routing
//Store
//ErrorBoundary
const App = () => {
  console.log('App component render');
  const [user, setUser] = useState('');

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className={styles.wrapper}>
          <Header user={user} setUser={setUser} />
          <Routing user={user} />
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
