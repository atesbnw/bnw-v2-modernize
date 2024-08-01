'use client';
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/reports/user-reports/login-logs/FilterModal';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';

function Page() {
  const params = useParams();
  const title = t('Reports.Login Logs');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
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
        field: 'transactionDate',
        headerName: t('pages.reports.user-reports.transactionDate'),
        width: 200,
      },
      {
        field: 'ip',
        headerName: t('pages.reports.user-reports.ip'),
        // width: 200
      },
      {
        field: 'username',
        headerName: t('pages.reports.user-reports.username'),
        // width: 200,
        // width: 200
      },
      {
        field: 'userId',
        headerName: t('pages.reports.user-reports.userId'),
        // width: 200,
        // width: 200
      },
      {
        field: 'device',
        headerName: t('pages.reports.user-reports.device'),
        // width: 200
        flex: 1
      },
      {
        field: 'browser',
        headerName: t('pages.reports.user-reports.browser'),
      },
      {
        field: 'isp',
        headerName: t('pages.reports.user-reports.isp'),
        // width: 200
      },
      {
        field: 'location',
        headerName: t('pages.reports.user-reports.location'),
        // width: 200,
        // width: 200
      },
      {
        field: 'timezone',
        headerName: t('pages.reports.user-reports.timezone'),
        // width: 200,
        // width: 200
      },
      {
        field: 'status',
        headerName: t('pages.reports.user-reports.status'),
        // width: 200,
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      ip: faker.internet.ipv4(),
      username: faker.internet.userName(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      device: faker.helpers.arrayElement(['iPhone 14 Pro Max', 'Windows 10 Home', 'Pixel 10']),
      browser: faker.helpers.arrayElement(['Chrome', 'Opera', "Safari"]),
      isp: faker.helpers.arrayElement(['Turkcell', 'Vodafone']),
      location: faker.helpers.arrayElement(['Yozgat', 'Ankara', 'Istanbul']),
      timezone: faker.helpers.arrayElement(['GMT +3', 'GMT +2', 'GMT +1']),
      status: faker.helpers.arrayElement(['Google AG Success', 'Session Expired', 'Wrong Password']),
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
