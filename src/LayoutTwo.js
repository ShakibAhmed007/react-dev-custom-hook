import React, { useState, useEffect } from 'react';

const LayoutTwo = () => {
  const [screenSize, setScreenSize] = useState(false);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div> Layout 2 : Browsing on {screenSize ? 'Small' : 'Large'} device </div>
  );
};

export default LayoutTwo;
