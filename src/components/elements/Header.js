import React from 'react';
import styled from 'styled-components';

import TMDBLogo from '../images/tmdb_logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div className='header-content'>
        <StyledRMDMLogo
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/1280px-Tmdb.new.logo.svg.png'
          alt='rmdb-logo'
        />
        <StyledTMDMLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

const StyledRMDMLogo = styled.img`
  width: 120px;

  @media screen and (max-width: 500px) {
    width: 100px;
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
