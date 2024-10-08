'use client';
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/user-reports/user-finance-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';

function Page() {
  const params = useParams();
  const title = t('Reports.User Finance Reports');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = [
    { title: t('pages.reports.user-reports.totalDeposit'), value: faker.commerce.price(1000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.totalWithdraw'), value: faker.commerce.price(1000, 100000, 2) + '₺' },
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.totalDepositCount'), value: faker.commerce.price(1000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.totalWithdrawCount'), value: faker.commerce.price(1000, 100000, 2) + '₺' },
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
        field: 'username',
        headerName: t('pages.reports.user-reports.username'),
        flex: 1,
        // width: 200
      },
      {
        field: 'userId',
        headerName: t('pages.reports.user-reports.userId'),
        flex: 1,
        // width: 200
      },
      {
        field: 'totalDeposit',
        headerName: t('pages.reports.user-reports.totalDeposit'),
        flex: 1,
        // width: 200
      },
      {
        field: 'depositCount',
        headerName: t('pages.reports.user-reports.depositCount'),
        flex: 1,
        // width: 200
      },
      {
        field: 'totalWithdraw',
        headerName: t('pages.reports.user-reports.totalWithdraw'),
        flex: 1,
        // width: 200
      },
      {
        field: 'withdrawCount',
        headerName: t('pages.reports.user-reports.withdrawCount'),
        flex: 1,
        // width: 200
      },
      {
        field: 'diff',
        headerName: t('pages.reports.user-reports.diff'),
        flex: 1,
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      // logo: faker.helpers.arrayElement(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcsnqRilJNGe_NVFwQm_OX6Mf6wFoDowGIg&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_rlWDp4NbQb1PYTzGBfJYkFKY7njllV1DQ&s']),
      // provider: faker.helpers.arrayElement(['Payfix', 'Papara', 'Turbo Havale', 'Anında KK']),
      // category: faker.helpers.arrayElement(['Credit Card', 'Bank Transfer', 'Payfix']),
      username: faker.internet.userName(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      totalDeposit: faker.commerce.price(1000, 100000, 2) + '₺',
      depositCount: faker.commerce.price(1000, 100000, 2) + '₺',
      totalWithdraw: faker.commerce.price(1000, 100000, 2) + '₺',
      withdrawCount: faker.commerce.price(1000, 100000, 2) + '₺',
      diff: faker.commerce.price(1000, 100000, 2) + '₺',
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
        link={'../user-finance-reports'}
        subTitle={decodeURIComponent(params?.uid)}
      />


      <SummaryBar
        title={t('pages.merchants.reports.Total')}
        data={totalResultsData}
      />


      <ParentCard title={''} action={(
        <FilterModal
          filter={filter}
          updateFilter={updateFilter}
          resetFilter={() => {
            setFilter({});
            setData(prev => ({ ...prev, filter: {} }));
          }}
          onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
        />
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
