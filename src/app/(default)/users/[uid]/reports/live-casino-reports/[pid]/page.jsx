"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import {uniqueId} from "lodash";
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/live-casino-reports/FilterModal";
import ParentCard from "@/app/components/shared/ParentCard";
import SummaryBar from "@/app/(default)/components/reports/SummaryBar";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {

  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});

  const titleSubTitle = "EGT";
  const titleProviderLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s";

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
        field: 'gameName',
        headerName: 'Game Name',
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
      providerLogo: faker.helpers.arrayElement(['https://static.casino.guru/pict/31244/Flaming-Hot.png?timestamp=1653449168000&imageDataId=214490&width=320&height=247']),
      gameName: faker.helpers.arrayElement(['Flaming Hot', '40 Burning Hot', '20 Dazzling Hot']),
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

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const totalResultsData = [
    { title: t('pages.user-management.user_management_reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
  ];

  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Users.Reports Menu.Live Casino Reports')}
        link={"../live-casino-reports"}
        LeftImage={titleProviderLogo}
        subTitle={titleSubTitle}
      />
      <ParentCard title={""} action={(
        <>
          <Tooltip title={t('i.downloadCSV')}>
            <IconButton color={'primary'} onClick={() => {}}>
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
        </>
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
