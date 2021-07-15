import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../Routing';

//Providers(Context)
//Routing
//Store
const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};

export default App;
