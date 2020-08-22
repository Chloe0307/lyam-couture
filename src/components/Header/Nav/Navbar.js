import React from 'react';
// == import NPM
import styled from 'styled-components';

import Burger from './Burger';

// Nav styled-component
const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px o;
  }
`;

// component Navbar
const Navbar = () => (
  <Nav>
    <div className="logo">
      Nav!bar
    </div>
    <Burger />
  </Nav>
);

export default Navbar;
