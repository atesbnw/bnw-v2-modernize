"use client";
import React, { memo, useState, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { IconHeart, IconPhoto, IconUserCircle } from '@tabler/icons-react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import {t} from "i18next";

function TopMenu() {
  const params = useParams();
  const location = usePathname();
  const [value, setValue] = React.useState(location);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const url = `/settings`;
  const ProfileTabs = [
    {
      label: 'Settings.Commission Rate',
      // icon: <IconUserCircle size="20" />,
      to: `${url}`,
    },
    {
      label: 'Settings.Limitation',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/limitation`,
    },
    {
      label: 'Settings.Segmentation',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/segmentation`,
    },
    {
      label: 'Settings.Permissions',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/permissions`,
    },
  ];





  return (
    <Box mt={1} sx={{ mt: 1, backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box justifyContent={'start'} display="flex" sx={{ maxWidth: { xs: 320, sm: '100%' } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="scrollable prevent tabs example"
        >
          {ProfileTabs.map((tab) => {
            return (
              <Tab
                iconPosition="start"
                label={t(tab.label)}
                sx={{ minHeight: '50px' }}
                icon={tab.icon}
                component={Link}
                href={tab.to}
                value={tab.to}
                key={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}

export default memo(TopMenu);
