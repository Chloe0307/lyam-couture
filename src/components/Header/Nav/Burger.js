/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import styled from 'styled-components';

import RightNav from './RightNav';
//  styled-component for the burger menu
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 50px;
  right: 60px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  @media (min-width: 1024px) {
    display: none;
  } 
  
  div {
    width: 2rem;
    height: 0.25rem;
    ${'' /* ternaire explication: if burger menu is open: logo burger is in grey : else in blue  */}
    background-color: ${({ open }) => open ? '#FEB29B' : '#527590'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
