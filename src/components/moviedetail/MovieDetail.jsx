import React, { useEffect, useState } from 'react';
import {
  fetchCasts,
  fetchMovieDetail,
  fetchMovieVideos,
  fetchSimilarMovie,
} from '../../services';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { calcTime, convertMoney } from '../../helper';

const MovieDetail = ({ match }) => {
  let params = match.params;
  let genres = [];
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };
    fetchAPI();
  }, [params]);

  genres = detail.genres;

  const MoviePlayerModal = (props) => {
    const youtubeUrl = 'https://www.youtube.com/watch?v=';
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id='contained-modal-title-vcenter'
            style={{ color: '#000000', fontWeight: 'bolder' }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000000' }}>
          {video.key && (
            <ReactPlayer
              className='container-fluid'
              url={video.key ? youtubeUrl + video.key : ''}
              playing
              width='100%'
            />
          )}
        </Modal.Body>
      </Modal>
    );
  };

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className='list-inline-item' key={i}>
          <button type='button' className='btn btn-outline-info'>
            {g.name}
          </button>
        </li>
      );
    });
  }

  const castList = casts.slice(0, 4).map((c, i) => {
    return (
      <div className='col-md-3 col-sm-6' key={i}>
        <img src={c.img} alt={c.name} className='img-fluid rounded-circle' />
        <p className='font-weight-bold text-center'>{c.name}</p>
        <p
          className='font-weight-light text-center'
          style={{ color: '#61dafb' }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  const similarMovieList = similarMovie.slice(0, 4).map((s, i) => {
    return (
      <div className='col-md-3 col-sm-6 movie-con' key={i}>
        <div
          className='card'
          style={{
            backgroundColor: 'transparent',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <Link to={`/movie/${s.id}`}>
            <img src={s.poster} alt={s.title} className='img-fluid' />
          </Link>
        </div>

        <div className='mt-3'>
          <div className='mt-3'>
            <p style={{ fontWeight: 'bolder' }}>{s.title}</p>
            <p>평점: {s.rating}</p>
            <ReactStars count={s.rating} size={20} color2={'#61dafb'} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row mt-2'>
        <MoviePlayerModal
          show={isOpen}
          onHide={() => setIsOpen(false)}
        ></MoviePlayerModal>
        <div className='col text-center' style={{ width: '100%' }}>
          <img
            className='img-fluid'
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          />
          <div className='carousel-center'>
            <i
              onClick={() => setIsOpen(true)}
              className='far fa-play-circle'
              style={{ fontSize: 75, color: '#61dafb', cursor: 'pointer' }}
            ></i>
          </div>
          <div
            className='carousel-caption'
            style={{ textAlign: 'center', fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>장르</p>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <ul className='list-inline'>{genres && genresList}</ul>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <div className='text-center'>
            <ReactStars
              count={detail.vote_average}
              size={20}
              color={'#f4c10f'}
            ></ReactStars>
          </div>
          <div className='mt-3'>
            <p style={{ color: '#61dafb', fontWeight: 'bold' }}>줄거리</p>
            {detail.overview}
          </div>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col-md-3'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>개봉일</p>
          <p style={{ color: '#5a606b' }}>{detail.release_date}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>런타임</p>
          <p style={{ color: '#5a606b' }}>{calcTime(detail.runtime)}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>수입</p>
          <p style={{ color: '#5a606b' }}>{convertMoney(detail.budget)}</p>
        </div>
        <div className='col-md-3'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>홈페이지</p>
          <p style={{ color: '#5a606b' }}>{detail.homepage || '없음'}</p>
        </div>
      </div>

      <hr className='mt-5' style={{ borderTop: '1px solid #5a606b' }} />

      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>
            배우 및 스태프
          </p>
          <div className='row mt-3'>{castList}</div>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col'>
          <p style={{ color: '#61dafb', fontWeight: 'bolder' }}>비슷한 영화</p>
        </div>
      </div>

      <div className='row mt-3'>{similarMovieList}</div>

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

export default MovieDetail;
