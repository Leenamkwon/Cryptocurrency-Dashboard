import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <div className='header-content'>
        <NavLink to='/'>
          <StyledRMDMLogo
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png'
            alt='rmdb-logo'
          />
        </NavLink>
      </div>
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
