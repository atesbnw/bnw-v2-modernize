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
  const url = `/content-management`;
  const ProfileTabs = [
    {
      label: 'Content Management.All Media',
      // icon: <IconUserCircle size="20" />,
      to: `${url}`,
    },
    {
      label: 'Content Management.Sliders',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/sliders`,
    },
    {
      label: 'Content Management.Popups',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/popups`,
    },
    {
      label: 'Content Management.Banners',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/banners`,
    },
    {
      label: 'Content Management.Private Days',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/private-days`,
    },
    {
      label: 'Content Management.Promotions',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/promotions`,
    },
    {
      label: 'Content Management.Site Design',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/site-design`,
    },
    {
      label: 'Content Management.Site Menu',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/site-menu`,
    },,
    {
      label: 'Content Management.Custom CSS',
      // icon: <IconUserCircle size="20" />,
      to: `${url}/custom-css`,
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
