"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/finance-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons-react';
import ParentCard from '@/app/components/shared/ParentCard';

function Page() {
  const params = useParams();
  const title = t("menu.Users.Reports Menu.Finance Reports");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = [
    { title: t('pages.merchants.reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Take Back'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
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
        field: 'providerLogo',
        headerName: '',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll'
        // width: 200
      },
      {
        field: 'providerTitle',
        headerName: 'Game',
        // width: 200
        flex: 1,
      },
      {
        field: 'played',
        headerName: 'Played',
        // width: 200
      },
      {
        field: 'won',
        headerName: 'Won',
        // width: 200
      },
      {
        field: 'difference',
        headerName: 'Difference',
        // width: 200
      },
      {
        field: 'canceled',
        headerName: 'Canceled',
        // width: 200
      },
      {
        field: 'takeBack',
        headerName: 'Take Back',
        // width: 200
      },
      {
        field: 'payback',
        headerName: 'Payback',
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <IconButton onClick={() => router.push(`/reports/finance-reports/${params?.pid}/${e.row?.providerTitle}`)}>
              <IconEye />
            </IconButton>,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      providerLogo: faker.helpers.arrayElement(['https://getlogovector.com/wp-content/uploads/2021/11/evolution-gaming-logo-vector.png']),
      providerTitle: faker.helpers.arrayElement(['Twist', 'Roulette', 'Wild & Rift', "Floaming Hot", "40 Burning Hot", "20 Dazzling Hot"]),
      played: faker.commerce.price(1000, 100000, 2) + '₺',
      won: faker.commerce.price(1000, 100000, 2) + '₺',
      difference: faker.commerce.price(1000, 100000, 2) + '₺',
      canceled: faker.commerce.price(1000, 100000, 2) + '₺',
      takeBack: faker.commerce.price(1000, 100000, 2) + '₺',
      payback: faker.commerce.price(1000, 100000, 2) + '₺',
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
        link={"../finance-reports"}
        subTitle={decodeURIComponent(params?.pid)}
        title={title}
      />


        <SummaryBar
          title={t('pages.merchants.reports.Total')}
          data={totalResultsData}
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