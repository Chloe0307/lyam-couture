import React from 'react';

// == import NPM
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Ul styled-component
const Ul = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  background-color: #EEEFEA;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  padding-top: 4.5rem;
  padding-left: 2rem;
  padding-right: 5rem;
  transition: transform 0.3s ease-in-out;

  li {
    text-align: left;
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #527590;

  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;

    li {
      font-size: 2rem;
      color: #527590;
    }
  }
`;

// RightNav component
const RightNav = ({ open }) => (
  <Ul open={open}>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/home">Accueil</Link>
    </li>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/products">Nos produits</Link>
    </li>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/galery">Galerie</Link>
    </li>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/loggin">Connexion</Link>
    </li>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/logout">Deconnexion</Link>
    </li>
    <li className="rightNav-li">
      <Link className="rightNav-link" to="/contact">Contact</Link>
    </li>
  </Ul>
);

export default RightNav;
