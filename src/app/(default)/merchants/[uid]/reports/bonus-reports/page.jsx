"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import IconButton from "@mui/material/IconButton";
import {IconFileDownload} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircle from "@mui/icons-material/CheckCircle";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import {uniqueId} from "lodash";
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/bonus-reports/FilterModal";
import ParentCard from "@/app/components/shared/ParentCard";
import {Box} from "@mui/material";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});

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
        field: 'bonusType',
        headerName: 'Bonus Type',
        // width: 200
      },
      {
        field: 'username',
        headerName: 'Username',
        // width: 200
      },
      {
        field: 'userId',
        headerName: 'User ID',
        // width: 200
      },
      {
        field: 'transferredBonus',
        headerName: 'Transferred Bonus',
        // width: 200
        flex: 1,
      },
      {
        field: 'creationTime',
        headerName: 'Creation Time',
        // width: 200,
      },
      {
        field: 'startTime',
        headerName: 'Start Time',
        // width: 200
      },
      {
        field: 'expirationTime',
        headerName: 'Expiration Time',
        // width: 200
      },
      {
        field: 'checkTime',
        headerName: 'Check Time',
        // width: 200
      },
      {
        field: 'amount',
        headerName: 'Amount',
        // width: 200
      },
      {
        field: 'operator',
        headerName: 'Operator',
        // width: 200
      },
      {
        field: 'actions',
        headerName: 'Status',
        type: 'actions',
        width: 120,
        getActions: (e) => {
          return [
            <>
              <CircleIcon color="warning"  />
              <CheckCircle color="success" />
              <InsertDriveFileOutlinedIcon />
            </>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      username: faker.internet.userName(),
      userId: uniqueId(),
      bonusType: faker.helpers.arrayElement(['Deposit', 'Freespin', 'FreeBet']),
      transferredBonus: faker.helpers.arrayElement(['%20 Hoş Geldin Bonusu', 'Pragmatic FreeSpin', '%15 Çevrimli Bonus']),
      creationTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      startTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      expirationTime: faker.commerce.price(1000, 100000, 2) + '₺',
      checkTime: faker.commerce.price(1000, 100000, 2) + '₺',
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      operator: "eren_bonus",
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
    { title: t('pages.merchants.reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
  ];

  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Merchants.Reports Menu.Bonus Reports')}
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
