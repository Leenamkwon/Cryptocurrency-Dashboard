import React from 'react';
import styled from 'styled-components';
import TMDBLogo from '../images/tmdb_logo.svg';
import FixedNav from '../hooks/FixedNav';
import SearchBar from './SearchBar';

const Header = () => {
  const [navFix, indicator] = FixedNav();

  return (
    <StyledHeader className={navFix === true ? 'fixed-nav' : ''}>
      <div className='header-content'>
        <StyledRMDMLogo
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png'
          alt='rmdb-logo'
        />
        <SearchBar className='search' />
        <StyledTMDMLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
      <Indicator
        className='indicator'
        style={{ width: `${indicator}%` }}
      ></Indicator>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background: #1c1c1c;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  transition: 0.2s ease-in;

  &.fixed-nav {
    top: -80px;
  }

  .header-content {
    max-width: 1280px;
    min-height: 50px;
    padding: 15px 25px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
      min-height: 70px;
    }

    .search {
      flex: 0 0 40%;
    }
  }
`;

const StyledRMDMLogo = styled.img`
  width: 70px;

  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;

const StyledTMDMLogo = styled.img`
  width: 122px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 120px;
    margin-top: 0px;
  }
`;

const Indicator = styled.div`
  height: 5px;
  transition: width 0.2s ease-in-out;
  background: -webkit-linear-gradient(
    to right,
    #36d1dc,
    #5b86e5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #36d1dc,
    #5b86e5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
