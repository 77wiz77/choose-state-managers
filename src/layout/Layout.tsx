import React from 'react';

import Header from './Header';
import LeftSideMenu from './LeftSideMenu';
import Main from './Main';

import Box from '@mui/material/Box';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //window?: () => Window;
}

function Layout(props: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <LeftSideMenu />
      <Main />
    </Box>
  );
}

export default Layout;
