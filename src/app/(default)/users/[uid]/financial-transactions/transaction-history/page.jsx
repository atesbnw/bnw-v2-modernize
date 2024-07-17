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
import Card from '@mui/material/Card';

function Page() {
  const params = useParams();
  const pathname = usePathname();


  const ButtonComps = useCallback(() => {
    return (
      <div style={{
        display: 'flex',
        gap: 4,
        alignItems: 'center',
      }}>
        <div>
          <Button variant={'contained'} onClick={() => {
          }}>{t('menu.Financial Transactions.Add Bonus')}</Button>
        </div>
        <div>
          <Button variant={'contained'} onClick={() => {
          }}>
            {t('menu.Financial Transactions.Add Manuel Transaction')}
          </Button>
        </div>
      </div>
    );
  }, []);

  return (
    <PageContainer title={t('menu.Financial Transactions.Transaction History')}>
      {/*<Typography variant="h6" component="div">{}</Typography>*/}
      <TitleBar
        title={t('menu.Financial Transactions.Transaction History')}
        Right={ButtonComps}
      />

      <Card variant="outlined" className={"pb-0"}>
        <TimeTabs justify={'between'}>
          {(time) => (
            <StatCards />
          )}
        </TimeTabs>
      </Card>

      <Card variant="outlined" className={"flex items-center justify-center pb-0"}>
        <LastActionsInfo />
      </Card>
      <Card variant="outlined">
        <TransactionsTable />
      </Card>
    </PageContainer>
  );
}

export default memo(Page);
