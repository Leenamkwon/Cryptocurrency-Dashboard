import React from 'react';

import Header from './elements/Header';
import Home from './Home';
import Indicator from './elements/Indicator';

const App = () => {
  console.log('app');
  return (
    <div>
      <Header />
      <Indicator />
      <Home />
    </div>
  );
};

export default App;
