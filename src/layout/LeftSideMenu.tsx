import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import React from 'react';

import leftsidemenu from '../store/leftsidemenu';
import Sidebar from '../components/Sidebar/Sidebar';
import { SidebarData } from '../components/Sidebar/SidebarData';
import { observer } from 'mobx-react-lite';

const drawerWidth = 240;

const LeftSideMenu: React.FC = observer(() => {
  return (
    <div>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          variant='temporary'
          open={leftsidemenu.openMobile}
          onClose={leftsidemenu.handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          <Toolbar />
          <Divider />
          {SidebarData.map((item, index) => {
            return <Sidebar item={item} key={index} />;
          })}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          <Toolbar />
          <Divider />
          {SidebarData.map((item, index) => {
            return <Sidebar item={item} key={index} />;
          })}
        </Drawer>
      </Box>
    </div>
  );
});

export default LeftSideMenu;
