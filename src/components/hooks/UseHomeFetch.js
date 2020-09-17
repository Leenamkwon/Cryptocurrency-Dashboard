import { useEffect, useState } from 'react';
import axios from 'axios';
import { POPULAR_BASE_URL } from '../../config';

export const UseHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await axios(endpoint);
      setState((prevState) => ({
        ...prevState,
        movies: [...prevState.movies, ...result.data.results],
        heroImage: prevState.heroImage || result.data.results[0],
        currentPage: result.data.page,
        totalPages: result.data.total_pages,
      }));
      console.log(result);
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(POPULAR_BASE_URL);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
