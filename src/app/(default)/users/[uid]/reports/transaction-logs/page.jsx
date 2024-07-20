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
import CheckCircle from "@mui/icons-material/CheckCircle";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import {uniqueId} from "lodash";
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/transaction-logs/FilterModal";

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
        field: 'transactionDate',
        headerName: 'Transaction Date',
        // width: 200
      },
      {
        field: 'ip',
        headerName: 'IP',
        // width: 200,
      },
      {
        field: 'operator',
        headerName: 'Operator',
        // width: 200
        flex: 1,
      },
      {
        field: 'update',
        headerName: 'Update',
        // width: 200
      },
      {
        field: 'transactionDetail',
        headerName: 'Transaction Detail',
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionDate:  faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      ip: faker.helpers.arrayElement(['192.112.51.32', '48.56.77.236', '210.56.24.56']),
      operator: faker.helpers.arrayElement(['erenerdi_admin', 'gore_admin']),
      update: faker.helpers.arrayElement(['Session expired', 'Name updated', 'Password updated']),
      transactionDetail: faker.helpers.arrayElement(['-', '20-10-1991', '*******']),
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
              title={t('menu.Users.Reports Menu.Transaction Logs')}
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
