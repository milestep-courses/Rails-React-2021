import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';
import { ErrorBoundary } from '../ErrorBoundary';

//Providers(Context)
//Routing
//Store
//ErrorBoundary
const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
