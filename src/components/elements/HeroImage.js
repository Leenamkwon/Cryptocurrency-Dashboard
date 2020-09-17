import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieProvider';
import styled from 'styled-components';

const HeroImage = () => {
  const context = useContext(MovieContext);
  const {
    state: { heroImage },
  } = context;

  const {
    backdrop_path,
    title,
    overview,
    vote_average,
    release_date,
  } = heroImage;

  return (
    <StyledHeroImage className='header' images={backdrop_path}>
      <div className='heroimage-content'>
        <div className='heroimage-text'>
          <h1>{title}</h1>
          <p>{overview}</p>
          <p>개봉일 {release_date}</p>
          <p>평점 {vote_average} / 10</p>
        </div>
      </div>
    </StyledHeroImage>
  );
};

export default HeroImage;

const StyledHeroImage = styled.div`
  background: ${(props) => `linear-gradient(
      to left bottom,
      rgba(0,0,0,0)
      5%,rgba(0,0,0,0.3)
      20%,rgba(0,0,0,0.65)
      100%
    ),
    url('http://image.tmdb.org/t/p/original/${props.images}'), #1c1c1c`};

  background-size: cover;
  background-position: top !important;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  min-height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 650px;
    position: absolute;
    overflow: hidden;
    color: #fff;
    top: 34%;
    padding: 10px;

    h1 {
      font-size: 48px;
      padding-left: 12px;
      position: relative;

      &::after {
        position: absolute;
        display: inline-block;
        content: '';
        width: 4px;
        height: 100%;
        background-color: #34c6cd;
        left: 0;
      }
    }

    p {
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }

    @keyframes animateHeroimage {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
