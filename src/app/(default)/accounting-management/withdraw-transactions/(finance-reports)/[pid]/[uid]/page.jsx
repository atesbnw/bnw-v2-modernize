"use client";
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
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
import ParentCard from '@/app/components/shared/ParentCard';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight } from '@tabler/icons-react';

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
    {
      title: t('pages.reports.user-reports.totalUniqueUser'),
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
        headerName: 'Provider Title',
        flex:1
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
        field: 'transactionType',
        headerName: t('pages.user-management.user_management_financial_transactions.transactionType'),

        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.user-management.user_management_financial_transactions.amount'),
        // width: 200
      },
      {
        field: 'transactionDate',
        headerName: t('pages.user-management.user_management_financial_transactions.transactionDate'),
        width: 175
      },
      {
        field: 'operator',
        headerName: t('pages.tools.announcements.Operator'),
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      providerLogo: faker.helpers.arrayElement(['https://www.paulbellard.com/wp-content/uploads/2020/03/evolution-gaming-logo.jpg',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS2jgqiRGVV6dOm-hkxr-JhLaWbpoxMim8Q&s","https://www.liveblackjack.co/wp-content/uploads/2019/08/lucky_streak.png"]),
      providerTitle: faker.helpers.arrayElement(['Lucky Streak', 'XPG', 'Ezugi', "Evolution"]),
      category: faker.helpers.arrayElement(['Papara', 'Banka', 'Kredi Kartı', 'Nakit']),
      username: faker.internet.userName().toLowerCase(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      transactionType: faker.commerce.price(1000, 100000, 2) + '₺',
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      operator: faker.internet.userName().toLowerCase(),

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
        subTitle={[
          { title: decodeURIComponent(params?.pid), link: `../${params?.pid}`},
          decodeURIComponent(params?.uid)
        ]}
        title={title}
      />

      <ParentCard title={decodeURIComponent(params?.uid)} action={(
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
