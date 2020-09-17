import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';

import HeroImage from './elements/HeroImage';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import NoImage from './images/no_image.jpg';

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from '../config';

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

  return (
    <div>
      <HeroImage />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map((movie) => {
          return (
            <MovieThumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : `${NoImage}`
              }
              movieId={movie.id}
              movieName={movie.original_title}
            />
          );
        })}
      </Grid>
      {loading && <Spinner />}
      <LoadMoreBtn />
    </div>
  );
};

export default Home;
