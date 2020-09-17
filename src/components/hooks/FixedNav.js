import { useState, useEffect, useRef } from 'react';

const FixedNav = () => {
  const [navFix, setNavFix] = useState(false);
  const lastYOffset = useRef(0);

  const scroll = () => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > lastYOffset.current) {
        setNavFix(true);
      } else {
        setNavFix(false);
      }

      if (window.pageYOffset === 0) {
        setNavFix(false);
      }
      // setLastYOffset(window.pageYOffset);
      lastYOffset.current = window.pageYOffset;
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  return [navFix];
};

export default FixedNav;
