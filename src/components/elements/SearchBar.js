import React, { useContext, useRef } from 'react';
import { MovieContext } from '../../contexts/MovieProvider';
import styled from 'styled-components';

const SearchBar = () => {
  const context = useContext(MovieContext);
  const {
    search: { searchTerm, setSearchTerm },
    fetchMovies,
  } = context;

  const timeOut = useRef(null);

  const doSearch = (e) => {
    const { value } = e.target;

    clearTimeout(timeOut.current);
    setSearchTerm(value);

    timeOut.current = setTimeout(() => {}, 500);
  };

  return (
    <StyledSearchForm>
      <form>
        <input
          type='text'
          placeholder='예: 어벤저스, 매드맥스'
          onChange={doSearch}
          value={searchTerm}
        />
        <button type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </StyledSearchForm>
  );
};

export default SearchBar;

const StyledSearchForm = styled.div`
  flex: 0 0 50%;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 80%;
    padding: 10px 15px;
    margin-right: -35px;
    border-radius: 100px;
    border: none;
    transition: width 0.3s ease;
    outline: none;

    &:focus {
      width: 100%;
    }
  }

  button {
    border: none;
    outline: none;
    background-color: #fff;
    &:active {
      transform: translateY(2px);
    }
  }
`;
