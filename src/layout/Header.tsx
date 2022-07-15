import { NavLink, Outlet } from 'react-router-dom';

import React from 'react'
import styled from 'styled-components'
const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 20px;
`;

const Header: React.FC = () => {
  return (
    <header>
      <Nav>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/about'>О проекте</NavLink>
        <NavLink to='/redux'>Redux</NavLink>
        <NavLink to='/mobx'>Mobx</NavLink>
        <NavLink to='/recoil'>Recoil</NavLink>
      </Nav>
      
    </header>
  );
};

export default Header;