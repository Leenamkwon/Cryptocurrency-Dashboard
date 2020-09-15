import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { context } from './AppProvider';

const Bar = styled.div`
  display: grid;
  font-weight: 400;
  grid-template-columns: 180px auto 100px 100px;
  grid-column-gap: 20px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      display: grid;
      margin-bottom: 30px;
      border-bottom: 1px solid #03ff03;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
}

function ControlButton({ name, active }) {
  const AppContext = useContext(context);
  const { page, setPages } = AppContext;

  return (
    <ControlButtonElem active={page === name} onClick={() => setPages(name)}>
      {toProperCase(name)}
    </ControlButtonElem>
  );
}

export default () => {
  return (
    <Bar>
      <Logo> CryptoDash </Logo>
      <div />
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  );
};
