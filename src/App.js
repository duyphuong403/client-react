import React from 'react';
import './App.scss';
import Navbar from './2.components/0.common/navigation';
import GlobalStyle from "./2.components/0.common/globalStyle";

export default () => {
  // Shouldn't connect store from App due to it will change state so it will re-render with infinity  
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
    </div>
  );
}
