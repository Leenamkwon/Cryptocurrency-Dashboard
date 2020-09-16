import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieProvider';

const HeroImage = () => {
  const context = useContext(MovieContext);
  const {
    loading,
    state: { heroImage },
  } = context;
  const { title, overview, vote_average } = heroImage;

  return (
    !loading && (
      <div className='heroimage-content'>
        <div className='heroimage-text'></div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>평점: {vote_average} / 10</p>
      </div>
    )
  );
};

export default HeroImage;
