"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TitleBar from "@/app/components/TitleBar";
import Stack from "@mui/material/Stack";
import TimeTabs from "@/app/components/shared/TimeTabs";
import StatCards from "@/app/(default)/components/merchants/dashboard/StatCards";
import LastActionsInfo from "@/app/(default)/components/merchants/dashboard/LastActionsInfo";
import GameStats from "@/app/(default)/components/merchants/dashboard/GameStats";
import SportsStats from "@/app/(default)/components/merchants/dashboard/SportsStats";
import AccountInformation from "@/app/(default)/components/merchants/dashboard/AccountInformation";
import Button from "@mui/material/Button";
import ParentCard from '@/app/components/shared/ParentCard';
import MerchantIcons from "@/app/(default)/components/merchants/MerchantIcons";
import ShowReferenceCode from "@/app/(default)/components/merchants/dashboard/ShowReferenceCode";
import UpdateCommissionRate from "@/app/(default)/components/merchants/dashboard/UpdateCommissionRate";
import MerchantMemberList from "@/app/(default)/components/merchants/dashboard/MerchantMemberList";

function Page() {
  const [filter, setFilter] = useState({});

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-1 items-center"}>
        <Box className={"flex flex-row gap-2  items-center mr-4"}>
          <ShowReferenceCode/>
        </Box>
        <Box>
          <UpdateCommissionRate/>
        </Box>
      </Stack>
    );
  }, []);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            title={t('menu.Merchants.profile')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.merchants.dashboard.Stats')}
            action={<TimeTabs customStyle/>}
          >
            <StatCards />
          </ParentCard>
        </Grid>


        <Grid item xs={12} className={"mt-0"}>
          <LastActionsInfo />
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.merchants.dashboard.Account')}
            action={<MerchantIcons />}
          >
            <AccountInformation />
          </ParentCard>
        </Grid>

        <Grid item xs={12}>
          <MerchantMemberList />
        </Grid>

        <Grid item xs={12}>
          <ParentCard
            title={t('pages.merchants.dashboard.Casino')}
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
