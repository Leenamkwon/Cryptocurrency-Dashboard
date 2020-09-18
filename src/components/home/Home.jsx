import React, { useState, useEffect } from 'react';
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from '../../services';
import { Link } from 'react-router-dom';
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import ReactStars from 'react-rating-stars-component';

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div key={index} style={{ width: '100%', height: 500 }}>
        <div className='carousel-center'>
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div className='carousel-center'>
          {/* <i
            className='far fa-play-circle'
            style={{ fontSize: 75, color: '#61dafb' }}
          ></i> */}
        </div>
        <div
          className='carousel-caption'
          style={{
            fontSize: '45px',
            textTransform: 'capitalize',
            fontWeight: 500,
          }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <li className='list-inline-item' key={index}>
        <button
          type='button'
          className='btn btn-outline-info'
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.slice(0, 4).map((item, index) => {
    return (
      <div className='col-md-3 col-sm-6 movie-con' key={index}>
        <div
          className='card'
          style={{
            backgroundColor: 'transparent',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title} className='img-fluid' />
          </Link>
        </div>

        <div className='mt-3'>
          <div className='mt-3'>
            <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
            <p>평점: {item.rating}</p>
            <ReactStars count={item.rating} size={20} color2={'#61dafb'} />
          </div>
        </div>
      </div>
    );
  });

  const trendingPersons = persons.slice(0, 4).map((p, i) => {
    return (
      <div className='col-md-3 col-sm-6' key={i}>
        <img
          src={p.profileImg}
          alt={p.name}
          className='img-fluid rounded-circle'
        />
        <p className='font-weight-bold text-center'>{p.name}</p>
        <p
          className='font-weight-light text-center'
          style={{ color: '#61dafb' }}
        >
          Trending for {p.known}
        </p>
      </div>
    );
  });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className='col-md-3 text-center' key={index}>
        <div className='card'>
          <Link to={`/movie/${item.id}`}>
            <img className='img-fluid' src={item.poster} alt={item.title} />
          </Link>
        </div>

        <div className='mt-3'>
          <div className='mt-3'>
            <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
            <p>평점: {item.rating}</p>
            <ReactStars count={item.rating} size={20} color2={'#61dafb'} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='container' style={{ paddingTop: '100px' }}>
      <div className='row mt-2'>
        <div className='col'>
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={5000}
            version={4}
            indicators={false}
          >
            {movies}
          </RBCarousel>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <ul className='list-inline'>{genreList}</ul>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <span className='font-weight-bold' style={{ color: '#61dafb' }}>
            신작 영화
          </span>
          <div className='float-right'>
            <i className='far fa-arrow-alt-circle-right'></i>
          </div>
        </div>
      </div>
      <div className='row mt-3'>{movieList}</div>

      <div className='row mt-3'>
        <div className='col'>
          <p className='font-weight-bold' style={{ color: '#61dafb' }}>
            금주 인기 셀럽들
          </p>
        </div>
      </div>

      <div className='row mt-3'>{trendingPersons}</div>

      <div className='row mt-3'>
        <div className='col'>
          <p className='font-weight-bold' style={{ color: '#61dafb' }}>
            금주 최고 평점 작품들
          </p>
        </div>
      </div>

      <div className='row mt-3'>{topRatedList}</div>

      <hr className='mt-5' style={{ borderTop: '1px solid #5a606b' }} />

      <div className='row mt-3 mb-5'>
        <div className='col-md-8 col-sm-6' style={{ color: '#5a606b' }}>
          <h3>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            possimus nam quae expedita quisquam eveniet ipsa similique corporis
            excepturi adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            aliquid dolores magni vitae voluptate quaerat sint, quam velit culpa
            quia!
          </p>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a href='/' style={{ color: '#61dafb' }}>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='/' style={{ color: '#61dafb' }}>
                <i className='fab fa-youtube'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='/' style={{ color: '#61dafb' }}>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='/' style={{ color: '#61dafb' }}>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-md-4 col-sm-6' style={{ color: '#5a606b' }}>
          <h3>KEEP IN TOUCH</h3>
          <ul className='list-unstyled'>
            <li>
              <p>
                <strong>
                  <i className='fas fa-map-marker-alt'></i> Address:
                </strong>{' '}
                city, state, country
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className='fas fa-phone'></i> Phone:{' '}
                </strong>{' '}
                +82 000 0000 0000,
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className='fas fa-envelope'></i> Email:
                </strong>{' '}
                namkwon12@gmail.com,
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
