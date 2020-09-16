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

  if (!state.movies[0]) {
    return (
      <>
        <h1>로딩중</h1>
      </>
    );
  }

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
