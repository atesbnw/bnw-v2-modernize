"use client";
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import PageContainer from '@/app/components/container/PageContainer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/finance-reports/manual-transaction-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconInfoCircle } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tooltip from '@mui/material/Tooltip';

function Page() {
  const title = t("Reports.Manuel Transaction Reports");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = useMemo(() => [
    { title: t('pages.reports.user-reports.diff'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.totalTransactionCount'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    {
      title: t('pages.reports.user-reports.totalDepositCount'),
      value: faker.commerce.price(24000, 100000, 2) + '₺',
    },
    {
      title: t('pages.reports.user-reports.totalDeposit'),
      value: faker.commerce.price(24000, 100000, 2) + '₺'
    },
    {
      title: t('pages.reports.user-reports.totalWithdrawCount'),
      value: faker.commerce.price(24000, 100000, 2) + '₺',
    },
    {
      title: t('pages.reports.user-reports.totalWithdraw'),
      value: faker.commerce.price(24000, 100000, 2) + '₺'
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
        field: 'id',
        headerName: t('pages.reports.user-reports.transactionId'),
        // width: 200
      },
      {
        field: 'transactionDetail',
        headerName: t('pages.reports.user-reports.transactionDetail'),
        width: 150
      },
      {
        field: 'transactionCategory',
        headerName: t('pages.reports.user-reports.transactionCategory'),
        // width: 200
      },
      {
        field: 'username',
        headerName: t("pages.merchants.dashboard.Username"),
        flex:1,
        // width: 200
      },
      {
        field: 'userId',
        headerName: t("pages.merchants.dashboard.User ID"),
        // height: 500
      },
      {
        field: 'transactionDate',
        headerName: t('pages.reports.user-reports.transactionDate'),
        flex:1,
        // width: 200,
      },
      {
        field: 'amount',
        headerName: t('pages.reports.user-reports.amount'),
        // width: 200
      },
      {
        field: 'operator',
        headerName: t('pages.reports.user-reports.operator'),
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionDetail: faker.helpers.arrayElement(['Deposit', 'Withdraw']),
      transactionCategory: faker.helpers.arrayElement(['Edit Balance', 'ATM Fee']),
      username: faker.internet.userName().toLowerCase(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      operator: "eren_bonus"
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
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={title}
      />

      <ParentCard title={""} action={(
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
        <SummaryBar
          title={t('pages.merchants.reports.Total')}
          data={totalResultsData}
        />
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
