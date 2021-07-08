import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
