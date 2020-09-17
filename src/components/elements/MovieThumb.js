import React from 'react';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable, movieName }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img className='clickable' src={image} alt={movieName} />
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
