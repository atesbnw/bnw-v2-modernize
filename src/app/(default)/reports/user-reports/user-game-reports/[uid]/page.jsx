"use client";
import React, { memo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams } from 'next/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';
import CasinoTab from './CasinoTab';
import LiveCasinoTab from './CasinoTab';
import VirtualGameTab from './CasinoTab';

function Page() {
  const params = useParams();
  const [tab, setTab] = useState(0);
  const title = t("Reports.User Game Reports");


  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={title}
        subTitle={decodeURIComponent(params?.uid)}
        link={"../user-game-reports"}
        Right={() => (
            <TimeTabs justify={"start"} />
        )}
      />

      <Tabs
        value={tab}
        onChange={(e,a) => setTab(a)}
        variant="fullWidth"
        allowScrollButtonsMobile
        aria-label="scrollable prevent tabs example"
      >
        {["pages.reports.user-reports.casino", "pages.reports.user-reports.liveCasino", "pages.reports.user-reports.virtualGames"].map((tab,_) => {
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
      <CustomTabPanel value={tab} index={2}>
        <VirtualGameTab />
      </CustomTabPanel>

    </Box>
  );
}

export default memo(Page);
