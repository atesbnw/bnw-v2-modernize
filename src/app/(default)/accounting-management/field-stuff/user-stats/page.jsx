"use client";
import React, { memo, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import { TransitionGroup } from 'react-transition-group';
import { CardContent, Grid, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';

function Page() {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      { title: t("pages.reports.user-reports.cart.lastSportBet"), digits: "100,00₺" },
      { title: t("pages.reports.user-reports.cart.lastCasinoBet"), digits: "40,00₺" },
      { title: t("pages.reports.user-reports.cart.lastLiveCasinoBet"), digits: "40,00₺" },
      { title: t("pages.reports.user-reports.cart.lastCasinoBonus"), digits: "X BONUSU" },
      { title: t("pages.reports.user-reports.cart.lastLiveCasinoBonus"), digits: "BAYRAM BONUSU" },
      { title: t("pages.reports.user-reports.cart.totalSportBet"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalCasinoBet"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalSportProfit"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalCasinoProfit"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalSportBonus"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalCasinoBonus"), digits: "4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalSportProfitRate"), digits: "%12" },
      { title: t("pages.reports.user-reports.cart.totalCasinoProfitRate"), digits: "%3" },
      { title: t("pages.reports.user-reports.cart.totalSportInvestments"), digits: "345 / 4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.totalWithdrawals"), digits: "189 / 4.100,18₺" },
      { title: t("pages.reports.user-reports.cart.lastInvestmentDate"), digits: "02.05.2021" },
      { title: t("pages.reports.user-reports.cart.lastWithdrawalDate"), digits: "02.05.2021" },
      { title: t("pages.reports.user-reports.cart.lastBonusDate"), digits: "02.05.2021" }
    ]);
  }, []);

  return (
    <Box>
      <TitleBar title={t("menu.Users.Reports Menu.User Stats")} />

      <Grid container spacing={3}>
          <Grid item container>
            {data && data.map(({ icon, ...topcard }, i) => (
                <Box className={"w-full sm:w-1/2 md:w-1/4 p-2"}>
                  <Box bgcolor={'info.light'} textAlign="center">
                    <CardContent className={'flex gap-3 items-center justify-center group'}>
                      {icon && (
                        <Box sx={{
                          backgroundColor: theme.palette.primary.main,
                          borderRadius: 2,
                          p: 1,
                        }} className={'items-center flex scale-90 group-hover:scale-100 transition-all ease-in-out'}>
                          {icon}
                        </Box>
                      )}
                      <Box className={'flex-1'}>
                        <Typography
                          color={'primary.main'}
                          mt={1}
                          variant="body1"
                          fontWeight={600}
                          className={'select-none'}
                        >
                          {topcard.title}
                        </Typography>
                        <Typography
                          variant="h4"
                          fontWeight={600}
                          className={'select-none'}
                        >
                          {topcard.digits}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
            ))}
          </Grid>
      </Grid>
    </Box>
  );
}

export default memo(Page);
