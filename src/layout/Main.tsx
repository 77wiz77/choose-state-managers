import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Theme } from '../components/Styles/Fonts/Fonts';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';

const Main: React.FC = () => {
  return (
    <main>
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <ThemeProvider theme={Theme}>
          <Outlet />
        </ThemeProvider>
      </Box>
    </main>
  );
};

export default Main;
