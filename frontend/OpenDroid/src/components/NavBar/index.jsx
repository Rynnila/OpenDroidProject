import React from 'react';
import { NavContainer, NavItem, Logo } from './style.jsx';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <NavContainer>
    <div>
        <Logo src={logo} alt="Logo" />
    </div>
    <div>
        <NavItem href="#home">Fórum</NavItem>
        <NavItem href="#about">Documentos</NavItem>
        <NavItem href="#contact">Sobre</NavItem>
    </div>
    </NavContainer>
  );
};

export default NavBar;
