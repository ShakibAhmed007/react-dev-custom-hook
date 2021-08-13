import React, { useState, useEffect } from 'react';
import useScreenWidth from './useScreenWidth';

const Layout = () => {
  const screenSize = useScreenWidth();

  return (
    <div> Layout 1: Browsing on {screenSize ? 'Small' : 'Large'} device </div>
  );
};

export default Layout;
