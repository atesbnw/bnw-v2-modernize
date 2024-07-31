'use client';
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TitleBar from '@/app/components/TitleBar';
import Button from '@mui/material/Button';
import PageContainer from '@/app/components/container/PageContainer';
import TimeTabs from '@/app/components/shared/TimeTabs';
import StatCards from '@/app/(default)/components/users/financial-transactions/StatCards';
import LastActionsInfo from '@/app/(default)/components/users/financial-transactions/LastActionsInfo';
import TransactionsTable from '@/app/(default)/components/users/financial-transactions/TransactionsTable';
import Stack from '@mui/material/Stack';
import NewManuelTransactionAdd from '@/app/(default)/components/users/financial-transactions/NewManuelTransactionAdd';
import AddBonus from '@/app/(default)/components/users/financial-transactions/AddBonus';
import Grid from "@mui/material/Grid";
import ParentCard from "@/app/components/shared/ParentCard";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload} from "@tabler/icons-react";
import FilterModal from "@/app/(default)/components/users/financial-transactions/FilterModal";

function Page() {
  const params = useParams();
  const pathname = usePathname();
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
        <Box>
          <AddBonus />
        </Box>
        <Box>
          <NewManuelTransactionAdd />
        </Box>
      </Stack>
    );
  }, []);

  return (
    <PageContainer title={t('menu.Financial Transactions.Transaction History')}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            title={t('menu.Financial Transactions.Transaction History')}
            Right={ButtonComps}
          />
        </Grid>


        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.user-management.user_management_financial_transactions.Stats')}
            action={<TimeTabs/>}
          >
            <StatCards />
          </ParentCard>
        </Grid>


        <Grid item xs={12} className={"mt-3"}>
          <LastActionsInfo />
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <ParentCard title={t('menu.Financial Transactions.Transaction History')} action={(
            <>
              <Tooltip title={t('i.downloadCSV')}>
                <IconButton color={'primary'} onClick={() => {}}>
                  <IconFileDownload />
                </IconButton>
              </Tooltip>
              <FilterModal
                filter={filter}
                updateFilter={updateFilter}
                resetFilter={() => {
                  setFilter({});
                  setData(prev => ({ ...prev, filter: {} }));
                }}
                onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
              />
            </>
          )}>
            <TransactionsTable />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default memo(Page);
