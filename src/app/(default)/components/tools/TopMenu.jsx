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
  const ProfileTabs = [
    {
      label: 'Tools.Bonuses',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/bonuses`,
    },
    {
      label: 'Tools.Announcements',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/announcements`,
    },
    {
      label: 'Tools.Bulk Message',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/bulk-message`,
    },
    {
      label: 'Tools.Bulk Email',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/bulk-email`,
    },
    {
      label: 'Tools.Operators',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/operators`,
    },
    {
      label: 'Tools.Merchants',
      // icon: <IconUserCircle size="20" />,
      to: `/tools/merchants`,
    }
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
