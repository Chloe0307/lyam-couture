import React from 'react';

// == import NPM
import styled from 'styled-components';

// Ul styled-component
const Ul = styled.ul`
${'' /* css in desktop */}
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-top: 1.5rem;

  li {
    padding-left: 18px;
    font-size: 2rem;
    color: #527590;
    text-align: center;
  }
${'' /* css in touch pad  and mobil*/}
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #EEEFEA;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    padding-top: 2.5rem;
    padding-right: 6rem;
    transition: transform 0.3s ease-in-out;

  }

`;

// RightNav component
const RightNav = ({ open }) => (
  <Ul open={open}>
    <li>Acceuil</li>
    <li>Nos produits</li>
    <li>Galerie</li>
    <li>Connexion</li>
    <li>Deconnexion</li>
    <li>Contact</li>
  </Ul>
);

export default RightNav;
