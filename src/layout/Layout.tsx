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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //window?: () => Window;
}

function Layout(props: Props) {
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
