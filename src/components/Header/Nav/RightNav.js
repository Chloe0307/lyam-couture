import React from 'react';

// == import NPM
import styled from 'styled-components';

// Ul styled-component
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-size: 1rem;
    color: #527590;
  }

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #EEEFEA;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;

    li {

    }
  }
`;

// RightNav component
const RightNav = () => (
  <Ul>
    <li>Home</li>
    <li>Nos produits</li>
    <li>Galerie</li>
    <li>Connexion</li>
    <li>Deconnexion</li>
    <li>Contact</li>
  </Ul>
);

export default RightNav;
