"use client";
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/finance-reports/finance-reports-provider/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight } from '@tabler/icons-react';
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
  const totalResultsData = useMemo(() => [
    { title: t('pages.reports.user-reports.totalDeposit'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.totalWithdraw'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    {
      title: t('pages.merchants.reports.Difference'),
      value: faker.commerce.price(24000, 100000, 2) + '₺',
    },
    { title: t('pages.reports.user-reports.totalDepositCount'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    {
      title: t('pages.reports.user-reports.totalWithdrawCount'),
      value: faker.datatype.number({ min: 100, max: 400 }).toString(),
    },
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
        field: 'providerLogo',
        headerName: 'Logo',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll',
        headerAlign: "center"
        // width: 200
      },
      {
        field: 'providerTitle',
        headerName: t("pages.merchants.dashboard.providerTitle"),
        // width: 200
      },
      {
        field: 'category',
        headerName: t("pages.game-management.admin-address.category"),
        // height: 500
      },
      {
        field: 'username',
        headerName: t("pages.merchants.dashboard.Username"),
        // width: 200
      },
      {
        field: 'userId',
        headerName: t("pages.merchants.dashboard.User ID"),
        // height: 500
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
        // width: 200
      },
      {
        field: 'totalWithdraw',
        headerName: t('pages.reports.user-reports.totalWithdraw'),
        // width: 200
      },
      {
        field: 'withdrawCount',
        headerName: t('pages.reports.user-reports.withdrawCount'),
        // width: 200
      },
      {
        field: 'diff',
        headerName: t('pages.reports.user-reports.diff'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <IconButton onClick={() => router.push(`/reports/finance-reports/${params?.pid}/${e.row?.username}`)}>
              <IconChevronRight />
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
      providerLogo: faker.image.avatar(),
      providerTitle: faker.helpers.arrayElement(['Papara Key', 'Ozmopay', 'Garanti', "Turbo Havale"]),
      category: faker.helpers.arrayElement(['Papara', 'Banka', 'Kredi Kartı', 'Nakit']),
      username: faker.internet.userName().toLowerCase(),
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
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        link={"../finance-reports"}
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
