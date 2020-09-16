import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { MovieProvider } from './contexts/MovieProvider';

ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById('root')
);
