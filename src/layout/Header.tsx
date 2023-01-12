import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { observer } from 'mobx-react-lite';
import leftsidemenu from '../store/leftsidemenu';

import React from 'react';

const drawerWidth = 240;

const Header: React.FC = observer(() => {
  return (
    <header>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={leftsidemenu.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' noWrap component='div'>
            Redux vs MobX vs Recoil
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
});

export default Header;
