import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieProvider';

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
} from '../../config';

const LoadMoreBtn = () => {
  const context = useContext(MovieContext);

  const {
    state: { currentPage, totalPages, error, movies },
    searchTerm,
    loading,
    fetchMovies,
  } = context;

  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      currentPage + 1
    }`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  return <div onClick={loadMoreMovies}>LoadMoreBtn</div>;
};

export default LoadMoreBtn;
