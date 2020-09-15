/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';

import Nav from 'src/components/Header/Nav/Navbar';

// == import styles and pictures

import './header.scss';

const Header = () => (
  <header className="header-content">
    <Nav />
    <div className="header-title-content">
      <img src="" alt="img" className="" />
      <h1 className="header-bigTitle"><strong>Lya'm Couture</strong></h1>
      <img src="" alt="img" />
    </div>
  </header>
);

export default Header;
