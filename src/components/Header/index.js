/* eslint-disable max-len */
import React from 'react';

import Navbar from './Navbar';
import './header.scss';

const Header = () => (
  <header className="header-content">
    <div className="header-title-content">
      <h1 className="header-bigTitle"><strong>Lya'm</strong></h1>
      <h2 className="header-title">Couture...</h2>
      <Navbar />
    </div>
    <p className="website-description"><em> " Bienvenu sur le site de créations handmade pour enfants "</em></p>
  </header>
);

export default Header;
