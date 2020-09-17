import { useState, useEffect } from 'react';

const FixedNav = () => {
  const [navFix, setNavFix] = useState(false);
  const [lastYOffset, setLastYOffset] = useState(0);
  const [indicator, setIndicator] = useState(0);

  const scroll = () => {
    window.addEventListener('scroll', () => {
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (window.pageYOffset > lastYOffset) {
        setNavFix(true);
      } else {
        setNavFix(false);
      }

      if (window.pageYOffset === 0) {
        setNavFix(0);
      }
      setLastYOffset(window.pageYOffset);
      setIndicator((window.pageYOffset / height) * 100);
    });
  };

  useEffect(() => {
    scroll();
  }, [indicator]);

  return [navFix, indicator];
};

export default FixedNav;
