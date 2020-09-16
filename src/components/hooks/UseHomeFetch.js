import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config';

export const UseHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const result = await await axios(endpoint);
      setState((prevState) => ({
        ...prevState,
        movies: [...result.data.results],
        heroImage: prevState.heroImage || result.data.results[0],
        currentPage: result.data.page,
        totalPages: result.data.total_pages,
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
