"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/user-reports/user-balance-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';

function Page() {
  const params = useParams();
  const title = t("Reports.User Balance Reports");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = [
    { title: t('pages.reports.user-reports.totalCurrentBalance'), value: faker.commerce.price(24000, 100000, 2) + '₺'},
    { title: t('pages.reports.user-reports.totalUniqueUser'), value: faker.datatype.number({ min: 100, max: 400 }).toString()},
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
      // {
      //   field: 'transactionId',
      //   headerName: t('pages.reports.user-reports.transactionId'),
      //   // width: 200
      // },
      {
        field: 'username',
        headerName: t('pages.reports.user-reports.username'),
        flex: 1,
      },
      {
        field: 'userId',
        headerName: t('pages.reports.user-reports.userId'),
        flex: 1,
        // width: 200
      },
      {
        field: 'updatedAt',
        headerName: t('pages.reports.user-reports.updatedAt'),
        flex: 1,
        // width: 200
      },
      {
        field: 'currentBalance',
        headerName: t('pages.reports.user-reports.currentBalance'),
        width: 200,
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      username: faker.internet.userName(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      updatedAt: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      currentBalance: faker.commerce.price(1000, 100000, 2) + "₺",
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
