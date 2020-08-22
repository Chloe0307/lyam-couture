/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';

import Nav from 'src/components/Header/Nav/Navbar';

// == import styles and pictures
import Picture from 'src/assets/pictures/headerPicture.jpg';
import './header.scss';

const Header = () => (
  <header className="header-content">
    <div className="header-title-content">
      <h1 className="header-bigTitle"><strong>Lya'm</strong></h1>
      <h2 className="header-title">Couture...</h2>
      <img src={Picture} alt="photo de présentation de produits" className="header-picture" />
    </div>
    <Nav />
  </header>
);

export default Header;
