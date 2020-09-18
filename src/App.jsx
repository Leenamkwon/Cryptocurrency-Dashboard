import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/home/Home';
import movieDetail from './components/moviedetail/MovieDetail';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/movie/:id' component={movieDetail} />
      </Switch>
    </main>
  );
}

export default App;
