import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TMDBLogo from '../images/tmdb_logo.svg';

const Header = () => {
  const [navFix, setNavFix] = useState(false);
  const [lastYOffset, setLastYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > lastYOffset) {
        setNavFix(false);
      } else {
        setNavFix(true);
      }
      setLastYOffset(window.pageYOffset);
    });
  }, [lastYOffset]);

  return (
    <StyledHeader className={!navFix && 'fixed-nav'}>
      <div className='header-content'>
        <StyledRMDMLogo
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png'
          alt='rmdb-logo'
        />
        <StyledTMDMLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
      <div className='indicator'></div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 15px;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  transition: 0.3s;

  &.fixed-nav {
    top: -80px;
  }

  .header-content {
    max-width: 1280px;
    min-height: 50px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
      min-height: 70px;
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
