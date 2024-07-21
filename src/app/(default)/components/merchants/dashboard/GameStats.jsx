import React, {Fragment, useState} from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {t} from "i18next";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import CustomTabPanel from "@/app/(default)/components/users/dashboard/CustomTabPanel";
import GameStatBox from "@/app/(default)/components/users/dashboard/GameStatBox";
import Button from "@mui/material/Button";

function GameStats() {
  const [tab, setTab] = useState(0);
  const GameTabs = [
    {
      label: 'pages.merchants.dashboard.Casino Slot',
    },
    {
      label: 'pages.merchants.dashboard.Live Casino' +
        '',
    },
    {
      label: 'pages.merchants.dashboard.Virtual Games',
    },
  ];

  return (
    <Fragment>
      <Box justifyContent={'start'} display="flex" sx={{ flexDirection: "column", maxWidth: { xs: 320, sm: '100%' } }}>
        <Tabs
          value={tab}
          onChange={(e,a) => setTab(a)}
          variant="scrollable"
          allowScrollButtonsMobile
          aria-label="scrollable prevent tabs example"
          className={"mb-4"}
        >
          {GameTabs.map((tab,_) => {
            return (
              <Tab
                iconPosition="start"
                label={t(tab.label)}
                sx={{ minHeight: '50px' }}
                value={_}
                key={tab}
              />
            );
          })}
        </Tabs>

        <CustomTabPanel value={tab} index={0}>
          <Grid container spacing={3}>
            <GameStatBox
              title={t('pages.merchants.dashboard.Most Played Game by Members')}
              subTitle={"Wild & Turkey / Netent"}
              image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGO2wGcJymC1ydiocdohoy1YgVg-L196iWQ&s"}
              data={[
                {
                  title: "pages.merchants.dashboard.Played",
                  value: 400000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Won",
                  value: 24000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Difference",
                  value: 510000,
                  currency: "TRY"
                }
              ]}
            />
            <GameStatBox
              title={t('pages.merchants.dashboard.Game with the Most Wins by Members')}
              subTitle={"Twin Spin / Netent"}
              image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvUttnM9IyBOfzC0QvTGK7uc_0L_0Iz4IBg&s"}
              data={[
                {
                  title: "pages.merchants.dashboard.Played",
                  value: 9200000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Won",
                  value: 8624000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Difference",
                  value: 230000,
                  currency: "TRY"
                }
              ]}
            />
            <GameStatBox
              title={t('pages.merchants.dashboard.Game Most Lost by Members')}
              subTitle={"Mythic Maiden / Netent"}
              image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7Yn6AoRDFzBWW3prXnT8AZ2-E3GFrb4PAg&s"}
              data={[
                {
                  title: "pages.merchants.dashboard.Played",
                  value: 553000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Won",
                  value: 244000,
                  currency: "TRY"
                },
                {
                  title: "pages.merchants.dashboard.Difference",
                  value: 160000,
                  currency: "TRY"
                }
              ]}
            />
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          Item 2
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          Item 3
        </CustomTabPanel>
      </Box>
    </Fragment>
  );
}

export default GameStats;