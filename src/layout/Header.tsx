import { NavLink, Outlet } from 'react-router-dom';

import React from 'react'

const Header: React.FC = () => {
  return (
    <header>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/about'>О проекте</NavLink>
      <NavLink to='/redux'>Redux</NavLink>
      <NavLink to='/mobx'>Mobx</NavLink>
      <NavLink to='/recoil'>Recoil</NavLink>
    </header>
  );
};

export default Header;