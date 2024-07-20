"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from '@/app/components/TitleBar';
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import Stack from "@mui/material/Stack";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircle from "@mui/icons-material/CheckCircle";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import {uniqueId} from "lodash";
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/finance-reports/FilterModal";

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
        field: 'transactionId',
        headerName: 'Transanction Id',
        // width: 200
      },
      {
        field: 'transactionType',
        headerName: 'Transaction Type',
        // width: 200
        flex: 1,
      },
      {
        field: 'category',
        headerName: 'Category',
        // width: 200,
      },
      {
        field: 'subCategory',
        headerName: 'Sub Category',
        // width: 200
      },
      {
        field: 'requestTime',
        headerName: 'Request Time',
        // width: 200
      },
      {
        field: 'approvalTime',
        headerName: 'Approval Time',
        // width: 200
      },
      {
        field: 'amount',
        headerName: 'Amount',
        // width: 200
      },
      {
        field: 'currentBalance',
        headerName: 'Current Balance',
        // width: 200
      },
      {
        field: 'operator',
        headerName: 'Operator',
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
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
      transactionId: uniqueId(),
      transactionType: faker.helpers.arrayElement(['Deposit', 'Withdraw', 'System']),
      category: faker.helpers.arrayElement(['Papara', 'Bonus', 'Havale']),
      subCategory: faker.helpers.arrayElement(['Papara Key', 'Welcome Bonus', 'Garanti Havale']),
      requestTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      approvalTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount:faker.commerce.price(1000, 100000, 2) + '₺',
      currentBalance:faker.commerce.price(1000, 100000, 2) + '₺',
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

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Reports Menu.Finance Reports')}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>
              <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
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
            </Stack>

            <DataTable
              search={false}
              data={data}
              toolbar={false}
            />

          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
