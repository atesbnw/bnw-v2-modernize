"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import {uniqueId} from "lodash";
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/transaction-logs/FilterModal";
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
        field: 'transactionDate',
        headerName: 'Transaction Date',
        width:130,
      },
      {
        field: 'ip',
        headerName: 'IP',
        width:110,
      },
      {
        field: 'operator',
        headerName: 'Operator',
        flex: 1,
        minWidth:100,
      },
      {
        field: 'update',
        headerName: 'Update',
        flex: 1,
        minWidth:130,
      },
      {
        field: 'transactionDetail',
        headerName: 'Transaction Detail',
        width:130,
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
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Users.Reports Menu.Transaction Logs')}
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
