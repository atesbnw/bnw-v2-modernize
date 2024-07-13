import React, { memo, useState, useCallback } from 'react';
import { toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import Box from '@mui/material/Box';
import Logo from '@/app/(default)/layout/shared/logo/Logo';
import { SidebarItems } from './InnerMenuElements';
import Drawer from '@mui/material/Drawer';
import { uniqueId } from 'lodash';
import { IconAperture } from '@tabler/icons-react';
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 350;

function InnerMenu({
  items = []
                   }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const [open, setOpen] = useState(true);

  return (
    <Drawer
      variant={lgUp ? 'permanent' : 'temporary'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: lgUp ? 0 : 1,
        [`& .MuiDrawer-paper`]: { position: 'relative' },
      }}
    >
      <SidebarItems items={items} activeFilled={true} />
    </Drawer>
  );
}

export default memo(InnerMenu);
