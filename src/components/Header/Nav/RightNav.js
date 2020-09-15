import React from 'react';
import PropTypes from 'prop-types';
// == import NPM
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Ul styled-component
const StyledUl = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  background-color: #EEEFEA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  width: 350px;
  height: 300px;
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
    flex-flow: row nowrap;
    justify-content: space-around;

    li {
      font-size: 2rem;
      color: #527590;
      
    }
  }
`;

// RightNav component
const RightNav = ({ open }) => (
  <div className="rightNav-content">
    <StyledUl open={open}>
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
    </StyledUl>
  </div>
);

RightNav.propTypes = {
  open: PropTypes.func.isRequired,
};

export default RightNav;
