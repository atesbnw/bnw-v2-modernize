'use client';
import React, {memo, useCallback, useState} from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import TitleBar from '@/app/components/TitleBar';
import PageContainer from '@/app/components/container/PageContainer';
import TimeTabs from '@/app/components/shared/TimeTabs';
import StatCards from '@/app/(default)/components/merchants/financial-transactions/StatCards';
import LastActionsInfo from '@/app/(default)/components/merchants/financial-transactions/LastActionsInfo';
import TransactionsTable from '@/app/(default)/components/merchants/financial-transactions/TransactionsTable';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import ParentCard from "@/app/components/shared/ParentCard";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload} from "@tabler/icons-react";
import FilterModal from "@/app/(default)/components/merchants/financial-transactions/FilterModal";

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

  return (
    <PageContainer title={t('menu.Financial Transactions.Transaction History')}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            title={t('menu.Financial Transactions.Transaction History')}
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
