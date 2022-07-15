import { NavLink, Outlet } from 'react-router-dom';

import React from 'react'

const Header: React.FC = () => {
  return (
    <header>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/redux'>Redux</NavLink>
      <NavLink to='/mobx'>Mobx</NavLink>
      <NavLink to='/recoil'>Recoil</NavLink>
    </header>
  );
};

export default Header;