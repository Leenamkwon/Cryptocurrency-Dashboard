import React, { createContext, useState } from 'react';
import { UseHomeFetch } from '../components/hooks/UseHomeFetch';

const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [{ state, loading, error, setState }, fetchMovies] = UseHomeFetch();

  return (
    <MovieContext.Provider
      value={{
        setState,
        state,
        loading,
        error,
        fetchMovies,
        search: { searchTerm, setSearchTerm },
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
