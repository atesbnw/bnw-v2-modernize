"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from "@/app/components/TitleBar";
import Stack from "@mui/material/Stack";
import TimeTabs from "@/app/components/shared/TimeTabs";
import StatCards from "@/app/(default)/components/operator-management/dashboard/StatCards";
import AccountInformation from "@/app/(default)/components/operator-management/dashboard/AccountInformation";
import ParentCard from '@/app/components/shared/ParentCard';
import OperatorIcons from "@/app/(default)/components/operator-management/OperatorIcons";
import UpdatePermissions from "@/app/(default)/components/operator-management/dashboard/UpdatePermissions";
import TransactionList from "@/app/(default)/components/operator-management/dashboard/TransactionList";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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

        </Box>
      </Stack>
    );
  }, []);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            title={t('menu.Operators.profile')}
          />
        </Grid>
        <Grid item xs={12} className={"pt-0"}>
          <Card variant="outlined">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Box className={"text-xl flex flex-row gap-2 items-center"}>
                <AdminPanelSettingsIcon fontSize="large"/>
                <strong>{t('pages.operator-management.dashboard.Role')}:</strong>
                <span>ADMIN</span>
              </Box>
              <Box>
                <UpdatePermissions/>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.operator-management.dashboard.Stats')}
            action={<TimeTabs/>}
          >
            <StatCards />
          </ParentCard>
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.operator-management.dashboard.Account')}
            action={<OperatorIcons />}
          >
            <AccountInformation />
          </ParentCard>
        </Grid>

        <Grid item xs={12}>
          <TransactionList />
        </Grid>

      </Grid>
    </Fragment>
  );
}

export default memo(Page);
