// Kilde: https://www.youtube.com/watch?v=GGkBwpxV7AI

import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 650px) {
    flex-flow: column nowrap;
    background-color: #F5F5F5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    margin-top: 80px;
    transition: transform 0.3s ease-in-out;
    z-index: 19;
    text-align: right;
  }
`;

const RightNav = ({ open, closeMenu }) => {

  const handleLinkClick = () => {
    if (open) {
      closeMenu();
    }
  };
  
  return (
    <Ul open={open}>
      <li>
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="menuitem" onClick={handleLinkClick}>Mine færdigheder</Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="menuitem" onClick={handleLinkClick}>Om mig</Link>
      </li>
      <li>
        <Link to="cv" spy={true} smooth={true} offset={-70} duration={500} className="menuitem" onClick={handleLinkClick}>CV</Link>
      </li>
    </Ul>
  )
}

export default RightNav