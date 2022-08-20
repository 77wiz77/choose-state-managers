import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const Footer: React.FC = () => {
  return (
    <footer>
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
};

export default Footer;
