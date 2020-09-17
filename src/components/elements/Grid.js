import React, { useEffect, useContext } from 'react';
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';
import { MovieContext } from '../../contexts/MovieProvider';
import MovieThumb from '../elements/MovieThumb';

import { IMAGE_BASE_URL, POSTER_SIZE, API_KEY, API_URL } from '../../config';

const Grid = ({ header }) => {
  const context = useContext(MovieContext);
  const {
    state: { currentPage, movies, searchTerm },
    fetchMovies,
  } = context;

  const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${
    currentPage + 1
  }`;
  const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
    currentPage + 1
  }`;
  const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;

      if (scrollHeight - scrollTop === clientHeight) {
        fetchMovies(endpoint);
      }
    });
  }, [currentPage]);

  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>
        {movies.map((movie, index) => {
          return (
            <MovieThumb
              key={movie.id + index}
              clickable
              image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              movieId={movie.id}
              movieName={movie.original_title}
            />
          );
        })}
      </StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;
