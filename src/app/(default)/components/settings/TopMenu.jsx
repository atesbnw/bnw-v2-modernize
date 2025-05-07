"use client";
import React, { memo } from 'react';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import { t } from "i18next";

function TopMenu() {
  const location = usePathname();
  const url = `/settings`;

  const ProfileTabs = [
    {
      label: 'Settings.Commission Rate',
      to: `${url}/commission-percents`,
    },
    // {
    //   label: 'Settings.Limitation',
    //   to: `${url}/limitation`,
    // },
    {
      label: 'Settings.Segmentation',
      to: `${url}/segmentation`,
    },
    {
      label: 'Settings.Permissions',
      to: `${url}/permissions`,
    },
  ];

  // Geçerli tab'ı belirlemek için path'i kontrol et
  const activeTab = ProfileTabs.find(tab => location.startsWith(tab.to))?.to || false;

  return (
    <Box mt={1} sx={{ mt: 1, backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box justifyContent={'start'} display="flex" sx={{ maxWidth: { xs: 320, sm: '100%' } }}>
        <Tabs
          value={activeTab} // Dinamik aktif tab
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="scrollable prevent tabs example"
        >
          {ProfileTabs.map((tab) => (
            <Tab
              label={t(tab.label)}
              sx={{ minHeight: '50px' }}
              component={Link}
              href={tab.to}
              value={tab.to}
              key={tab.label}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default memo(TopMenu);
