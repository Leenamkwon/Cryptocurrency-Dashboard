import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyleIndicator = styled.div`
  width: 100px;
  height: 5px;
  position: fixed;
  top: 0px;
  z-index: 900;
  transition: width 0.2s ease;
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

const Indicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.pageYOffset / height) * 100);
    });
  }, []);

  return <StyleIndicator style={{ width: `${progress}%` }}></StyleIndicator>;
};

export default Indicator;
