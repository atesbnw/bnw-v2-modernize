'use client';
import React, { memo } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import TitleBar from '@/app/components/TitleBar';
import PageContainer from '@/app/components/container/PageContainer';
import TimeTabs from '@/app/components/shared/TimeTabs';
import StatCards from '@/app/(default)/components/users/financial-transactions/StatCards';
import LastActionsInfo from '@/app/(default)/components/users/financial-transactions/LastActionsInfo';
import TransactionsTable from '@/app/(default)/components/users/financial-transactions/TransactionsTable';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";

function Page() {
  const params = useParams();
  const pathname = usePathname();

  return (
    <PageContainer title={t('menu.Financial Transactions.Transaction History')}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            title={t('menu.Financial Transactions.Transaction History')}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <Card variant="outlined">
            <TimeTabs justify={'between'}>
              {(time) => (
                <StatCards />
              )}
            </TimeTabs>
          </Card>
        </Grid>

        <Grid item xs={12} className={"mt-3"}>
          <LastActionsInfo />
        </Grid>

        <Grid item xs={12} className={"mt-0"}>
          <Card variant="outlined">
            <TransactionsTable />
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default memo(Page);
