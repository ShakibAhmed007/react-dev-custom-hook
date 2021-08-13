import React from 'react';
import './style.css';
import Layout from './Layout';
import LayoutTwo from './LayoutTwo';

export default function App() {
  return (
    <div>
      <h1>Custom Hook!</h1>
      <p>Same resizing functionality in Layout 1 and 2</p>
      <Layout />
      <LayoutTwo />
    </div>
  );
}
