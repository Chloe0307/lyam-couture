import React from 'react';

import './navbar.scss';

const Navbar = () => (
  <div>
    <div className="logo">
      Nav!bar
    </div>
    <ul>
      <li>Home</li>
      <li>Nos produits</li>
      <li>Galerie</li>
      <li>Connexion</li>
      <li>Deconnexion</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Navbar;
