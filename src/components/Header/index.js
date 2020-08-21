/* eslint-disable max-len */
import React from 'react';

import Nav from 'src/components/Header/Nav/Navbar';
import './header.scss';

const Header = () => (
  <header className="header-content">
    <div className="header-title-content">
      <h1 className="header-bigTitle"><strong>Lya'm</strong></h1>
      <h2 className="header-title">Couture...</h2>
    </div>
    <Nav />
  </header>
);

export default Header;
