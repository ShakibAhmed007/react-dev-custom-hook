import React, { useState, useEffect } from 'react';
import useScreenWidth from './useScreenWidth';

const LayoutTwo = () => {
  const screenSize = useScreenWidth();


  return (
    <div> Layout 2 : Browsing on {screenSize ? 'Small' : 'Large'} device </div>
  );
};

export default LayoutTwo;
