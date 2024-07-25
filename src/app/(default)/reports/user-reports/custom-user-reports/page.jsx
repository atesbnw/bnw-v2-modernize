'use client';
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/reports/user-reports/custom-user-reports/FilterModal';
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
  const title = t('Reports.Custom User Reports');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = [
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
    },
  ];
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
        field: 'memberSegment',
        headerName: t('pages.reports.user-reports.memberSegment'),
        // width: 200,
        // width: 200
      },
      {
        field: 'activityType',
        headerName: t('pages.reports.user-reports.activityType'),
        // width: 200,
        // width: 200
      },
      {
        field: 'transactionId',
        headerName: t('pages.reports.user-reports.transactionId'),
        // width: 200,
        flex:1
      },
      {
        field: 'username',
        headerName: t('pages.reports.user-reports.username'),
      },
      {
        field: 'userId',
        headerName: t('pages.reports.user-reports.userId'),
        // width: 200
      },
      {
        field: 'fullName',
        headerName: t('pages.reports.user-reports.fullName'),
        // width: 200,
        // width: 200
      },
      // {
      //   field: 'lastTransactionDate',
      //   headerName: t('pages.reports.user-reports.lastTransactionDate'),
      //   // width: 200,
      //   // width: 200
      // },
      {
        field: 'ip',
        headerName: t('pages.reports.user-reports.ip'),
        // width: 200,
        // width: 200
      },
      {
        field: 'transaction',
        headerName: t('pages.reports.user-reports.transaction'),
        // width: 200,
        // width: 200
      },
      // {
      //   field: 'category',
      //   headerName: t('pages.reports.user-reports.category'),
      //   // width: 200,
      //   // width: 200
      // },
      // {
      //   field: 'sub_category',
      //   headerName: t('pages.reports.user-reports.sub_category'),
      //   // width: 200,
      //   // width: 200
      // },
      {
        field: 'maxDeposit',
        headerName: t('pages.reports.user-reports.maxDeposit'),
        // width: 200,
        // width: 200
      },
      {
        field: 'maxWithdraw',
        headerName: t('pages.reports.user-reports.maxWithdraw'),
        // width: 200,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.reports.user-reports.amount'),
        // width: 200,
        // width: 200
      },
      {
        field: 'balance',
        headerName: t('pages.reports.user-reports.balance'),
        // width: 200,
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      memberSegment: faker.helpers.arrayElement(['VIP', 'Normal']),
      activityType: faker.helpers.arrayElement(['Confirmed', '-']),
      transactionId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      username: faker.internet.userName().toLowerCase(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      fullName: faker.person.fullName(),
      lastTransactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      ip: faker.internet.ipv4(),
      transaction: faker.helpers.arrayElement(['Deposit', 'Withdraw']),
      category: faker.helpers.arrayElement(['Papara', 'Payfix']),
      sub_category: faker.helpers.arrayElement(['Papara Key', 'Papara XYZ']),
      maxDeposit: faker.commerce.price(24000, 100000, 2) + '₺',
      maxWithdraw: faker.commerce.price(24000, 100000, 2) + '₺',
      amount: faker.commerce.price(24000, 100000, 2) + '₺',
      balance: faker.commerce.price(24000, 100000, 2) + '₺',
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
            label={t('pages.reports.user-reports.sameIp')}
          />
          <FormControlLabel
            control={<CustomCheckbox />}
            label={t('pages.reports.user-reports.sameTransaction')}
          />
          <FormControlLabel
            control={<CustomCheckbox />}
            label={t('pages.reports.user-reports.sameMemberType')}
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
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
