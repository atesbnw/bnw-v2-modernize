'use client';
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import TitleBar from '@/app/components/TitleBar';
import PageContainer from '@/app/components/container/PageContainer';
import TransactionsTable from '@/app/(default)/components/merchants/financial-transactions/BalanceHistoryTable';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";

function Page() {
  const params = useParams();
  const pathname = usePathname();

  return (
    <PageContainer title={t('menu.Financial Transactions.Balance History')}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            title={t('menu.Financial Transactions.Balance History')}

          />
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
