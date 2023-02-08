import React from 'react';

import Header from './Header';
import LeftSideMenu from './LeftSideMenu';
import Main from './Main';
import Footer from './Footer';

import Box from '@mui/material/Box';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <LeftSideMenu />
        <Main />
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
