'use client';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/reports/user-reports/merchant-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFileDownload } from '@tabler/icons-react';
import Stack from '@mui/material/Stack';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import { FormControlLabel } from '@mui/material';

function Page() {
  const params = useParams();
  const title = t('Reports.Merchant Reports');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = useMemo(() => [
    {
      title: t('pages.reports.user-reports.totalBalance'),
      value: faker.commerce.price(24000, 100000, 2) + '₺',
    },
    {
      title: t('pages.reports.user-reports.totalVipMembers'),
      value: faker.datatype.number({ min: 100, max: 400 }).toString(),
    },
    {
      title: t('pages.reports.user-reports.totalConfirmedMembers'),
      value: faker.datatype.number({ min: 100, max: 400 }).toString(),
    },
    {
      title: t('pages.reports.user-reports.totalLoyalMembers'),
      value: faker.datatype.number({ min: 100, max: 400 }).toString(),
    }
  ], []);
  const router = useRouter();
  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 20,
    totalPage: 1,
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const columns = [
      {
        field: 'merchantId',
        headerName: t('pages.reports.user-reports.merchantId'),
      },
      {
        field: 'merchantUsername',
        headerName: t('pages.reports.user-reports.merchantUsername'),
      },
      {
        field: 'totalMembers',
        headerName: t('pages.reports.user-reports.totalMembers'),
        flex:1
      },
      {
        field: 'merchantRegisterDate',
        headerName: t('pages.reports.user-reports.merchantRegisterDate'),
      },
      {
        field: 'lastMemberRegisterDate',
        headerName: t('pages.reports.user-reports.lastMemberRegisterDate'),
      },
      {
        field: 'totalDeposit',
        headerName: t('pages.reports.user-reports.totalDeposit'),
      },
      {
        field: 'totalDepositCount',
        headerName: t('pages.reports.user-reports.totalDepositCount'),
      },
      {
        field: 'totalWithdraw',
        headerName: t('pages.reports.user-reports.totalWithdraw'),
      },
      {
        field: 'totalWithdrawCount',
        headerName: t('pages.reports.user-reports.totalWithdrawCount'),
      },
      {
        field: 'totalBonus',
        headerName: t('pages.reports.user-reports.totalBonus'),
      },
      {
        field: 'totalBonusCount',
        headerName: t('pages.reports.user-reports.totalBonusCount'),
      },
      {
        field: 'totalBalance',
        headerName: t('pages.reports.user-reports.totalBalance'),
      },
      {
        field: 'totalPlaying',
        headerName: t('pages.reports.user-reports.totalPlaying'),
      },
      {
        field: 'totalWon',
        headerName: t('pages.reports.user-reports.totalWon'),
      },
      {
        field: 'diff',
        headerName: t('pages.reports.user-reports.diff'),
      },
      {
        field: 'netProfit',
        headerName: t('pages.reports.user-reports.netProfit'),
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      merchantId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      merchantUsername: faker.internet.userName().toLowerCase(),
      totalMembers: faker.datatype.number({ min: 100, max: 500 }).toString(),
      merchantRegisterDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      lastMemberRegisterDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      totalDeposit: faker.commerce.price(24000, 100000, 2) + '₺',
      totalDepositCount: faker.datatype.number({ min: 100, max: 500 }).toString(),
      totalWithdraw: faker.commerce.price(24000, 100000, 2) + '₺',
      totalWithdrawCount: faker.datatype.number({ min: 100, max: 500 }).toString(),
      totalBonus: faker.commerce.price(24000, 100000, 2) + '₺',
      totalBonusCount: faker.datatype.number({ min: 10, max: 50 }).toString(),
      totalBalance: faker.commerce.price(24000, 100000, 2) + '₺',
      totalPlaying: faker.commerce.price(24000, 100000, 2) + '₺',
      totalWon: faker.commerce.price(24000, 100000, 2) + '₺',
      diff: faker.commerce.price(2400, 10000, 2) + '₺',
      netProfit: faker.commerce.price(2400, 10000, 2) + '₺'
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  return (
    <Box className={'flex flex-col gap-4'}>
      <TitleBar
        title={title}
      />

      <SummaryBar
        title={t('pages.merchants.reports.Total')}
        data={totalResultsData}
      />


      <ParentCard title={(
        <Stack direction="row" spacing={2}>
          <FormControlLabel
            control={<CustomCheckbox />}
            label={t('pages.reports.user-reports.sameRegisterDate')}
          />
          <FormControlLabel
            control={<CustomCheckbox />}
            label={t('pages.reports.user-reports.sameLastRegisterDate')}
          />
        </Stack>
      )} action={(
        <Stack direction="row" spacing={2}>
          <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
            <IconButton color={'primary'} onClick={() => {
            }}>
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
        </Stack>
      )}>
        <DataTable
          withSideMenu={true}
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
