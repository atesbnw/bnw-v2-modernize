"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import PageContainer from '@/app/components/container/PageContainer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/game-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {
  const params = useParams();
  const title = t("menu.Users.Reports Menu.Casino Reports");
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
    { title: t('pages.merchants.reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
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
        headerName: 'Bet',
        // width: 200
      },
      {
        field: 'won',
        headerName: 'Win',
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
        headerName: 'Rollback',
        // width: 200
      },
      {
        field: 'payback',
        headerName: 'Payback',
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      providerLogo: faker.helpers.arrayElement(['https://www.paulbellard.com/wp-content/uploads/2020/03/evolution-gaming-logo.jpg']),
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
        link={"../reports"}
        subTitle={decodeURIComponent(params?.pid)}
        title={title}
      />

      <ParentCard title={decodeURIComponent(params?.pid)} action={(
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
