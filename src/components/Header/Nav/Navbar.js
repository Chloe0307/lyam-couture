import React from 'react';
// == import NPM
import styled from 'styled-components';

// import Burger from './Burger';
import Burger from './Burger';
// Nav styled-component
const Nav = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  ${'' /* justify-content: space-between; */}
`;

// component Navbar
const Navbar = () => (
  <Nav>
    <Burger />
  </Nav>
);

export default Navbar;
