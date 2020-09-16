import React, { createContext, useEffect, useState } from 'react';
import { UseHomeFetch } from '../components/hooks/UseHomeFetch';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../config';

const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [{ state, loading, error }, fetchMovies] = UseHomeFetch();

  return (
    <MovieContext.Provider value={{ state, loading, error, fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
