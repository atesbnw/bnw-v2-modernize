"use client";
import React, { memo, useState, Fragment } from 'react';
import Stack from '@mui/material/Stack';
import TitleBar from '@/app/components/TitleBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';
import CasinoTab from '@/app/(default)/game-management/category-management/CasinoTab';
import {t} from "i18next";
import LiveCasinoTab from '@/app/(default)/game-management/category-management/LiveCasinoTab';

function TransactionsTable() {
  const [tab, setTab] = useState(0);

  return (
    <Fragment>
      <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>
        <TitleBar
          title={t("menu.Game Management.Category Management")}
        />
      </Stack>

      <Tabs
        value={tab}
        onChange={(e,a) => setTab(a)}
        variant="fullWidth"
        allowScrollButtonsMobile
        aria-label="scrollable prevent tabs example"
      >
        {["pages.game-management.category-management.casinoCategories", "pages.game-management.category-management.liveCasinoCategories"].map((tab,_) => {
          return (
            <Tab
              iconPosition="start"
              label={t(tab)}
              sx={{ minHeight: '50px' }}
              value={_}
              key={tab}
            />
          );
        })}
      </Tabs>

      <CustomTabPanel value={tab} index={0}>
        <CasinoTab />
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <LiveCasinoTab />
      </CustomTabPanel>

    </Fragment>
  );
}

export default memo(TransactionsTable);
