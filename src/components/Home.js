import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
  const context = useContext(MovieContext);
  const { state } = context;

  console.log('hi');

  if (state.error) {
    return <div>Something went wrong...</div>;
  }
  if (!state.movies[0]) {
    return <Spinner />;
  }

  return (
    <div>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </div>
  );
};

export default Home;
