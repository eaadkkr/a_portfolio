// Kilde: https://www.youtube.com/watch?v=GGkBwpxV7AI

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 5%;
  z-index: 20;
  cursor: pointer;
  display: none;

  @media (max-width: 650px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#333' : '#333'};
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      // Forhindre scrolling i body'en
      document.body.style.overflow = 'hidden';
    } else {
      // Tillad scrolling i body'en, når burgermenuen er lukket
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  // Luk burgermenuen, når der klikkes på et link
  const toggleMenu = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <StyledBurger open={open} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} closeMenu={toggleMenu} />
    </>
  )
}

export default Burger