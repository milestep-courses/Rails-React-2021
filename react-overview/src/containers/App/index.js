import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';
import { ErrorBoundary } from '../ErrorBoundary';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AuthProvider } from '../../context/AuthContext';

//Providers(Context)
//Routing
//Store
//ErrorBoundary
const App = () => {
  console.log('App component render');

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <Header />
          <Routing />
          <Footer />
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
