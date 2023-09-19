// Kilde: https://www.youtube.com/watch?v=GGkBwpxV7AI

import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/logo.png';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
`

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="Logo" className="logo" />
      <Burger />
    </Nav>
  )
}

export default Navbar