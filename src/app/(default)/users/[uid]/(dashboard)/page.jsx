"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TitleBar from "@/app/components/TitleBar";
import Stack from "@mui/material/Stack";
import TimeTabs from "@/app/components/shared/TimeTabs";
import StatCards from "@/app/(default)/components/users/dashboard/StatCards";
import LastActionsInfo from "@/app/(default)/components/users/dashboard/LastActionsInfo";
import CategoryStats from "@/app/(default)/components/users/dashboard/CategoryStats";
import GameStats from "@/app/(default)/components/users/dashboard/GameStats";
import SportsStats from "@/app/(default)/components/users/dashboard/SportsStats";
import AccountInformation from "@/app/(default)/components/users/dashboard/AccountInformation";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ParentCard from '@/app/components/shared/ParentCard';
import UserIcons from "@/app/(default)/components/users/UserIcons";

function Page() {

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-1 items-center"}>
        <Box className={"flex flex-row gap-2  items-center mr-4"}>
          <AccessTimeIcon fontSize="large" />
          <Box className={"md:items-start items-center flex flex-col"}>
            <Typography variant={'subtitle2'} fontWeight={'bold'}>{t('pages.user-management.user_management_dashboard.How Long')}</Typography>
            <Typography variant={'body1'}>{t('pages.user-management.user_management_dashboard.How Long Result')}</Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" color="primary">{t('pages.user-management.user_management_dashboard.End Session')}</Button>
        </Box>
      </Stack>
    );
  }, []);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            title={t('menu.Users.Player Info')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.user-management.user_management_dashboard.Latest Note')}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </ParentCard>
        </Grid>

        <Grid item xs={12} >
          <ParentCard
            title={t('pages.user-management.user_management_dashboard.Stats')}
            action={<TimeTabs customStyle />}
          >
            <StatCards />
          </ParentCard>
        </Grid>


        <Grid item xs={12} className={"mt-0"}>
          <LastActionsInfo />
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.user-management.user_management_dashboard.Account')}
            action={<UserIcons />}
          >
            <AccountInformation />
          </ParentCard>
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <CategoryStats />
        </Grid>

        <Grid item xs={12}>
          <ParentCard
            title={t('pages.user-management.user_management_dashboard.Casino')}
            action={
              <Stack direction="row" spacing={2}>
                <Box><Button color="primary">Today</Button></Box>
                <Box><Button color="primary">Yesterday</Button></Box>
                <Box><Button color="primary">Last 7 Days</Button></Box>
              </Stack>
            }
          >
            <GameStats />
          </ParentCard>
        </Grid>

      </Grid>
    </Fragment>
  );
}

export default memo(Page);
