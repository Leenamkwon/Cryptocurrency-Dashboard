import React from 'react';
import Header from './elements/Header';
import Home from './Home';
import { MovieProvider } from '../contexts/MovieProvider';

const App = () => (
  <div>
    <MovieProvider>
      <Header />
      <Home />
    </MovieProvider>
  </div>
);

export default App;
