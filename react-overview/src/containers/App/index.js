import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthProvider } from '../../context/AuthContext';
import { StoreProvider } from '../../store';
import { Auth } from '../Auth';

//Providers(Context)
//Routing
//Store
//ErrorBoundary
const App = () => {
  console.log('App component render');

  return (
    <BrowserRouter>
      <StoreProvider>
        <Auth>
          <ErrorBoundary>
            <AuthProvider>
              <Header />
              <Routing />
              <Footer />
            </AuthProvider>
          </ErrorBoundary>
        </Auth>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
