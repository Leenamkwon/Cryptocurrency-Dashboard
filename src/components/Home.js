import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
  const context = useContext(MovieContext);
  const {
    state: { currentPage, totalPages, error, movies },
    searchTerm,
    loading,
    fetchMovies,
  } = context;

  if (error) {
    return <div>Something went wrong...</div>;
  }
  if (!movies[0]) {
    return <Spinner />;
  }

  console.log('HOME');

  return (
    <div>
      <HeroImage />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}></Grid>
      {loading && <Spinner />}
      <LoadMoreBtn />
    </div>
  );
};

export default Home;
