"use client";
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/accounting-management/FilterModal';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconFileDownload, IconInfoCircle } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

function Page() {
  const title = t("pages.accounting-management.newRequests");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
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
        field: 'transactionId',
        headerName: t('pages.accounting-management.transactionId'),
        // width: 200
      },
      {
        field: 'userId',
        headerName: t('pages.accounting-management.userId'),
        flex:1,
      },
      {
        field: 'username',
        headerName: t('pages.accounting-management.username'),
        flex:1,
      },
      {
        field: 'category',
        headerName: t('pages.accounting-management.category'),
        flex:1,
      },
      {
        field: 'provider',
        headerName: t('pages.accounting-management.provider'),
        flex:1,
        // width: 200
      },
      {
        field: 'requestTime',
        headerName: t('pages.accounting-management.requestTime'),
        flex:1,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.accounting-management.amount'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            ...(e?.row?.note ? [
              <Tooltip title={e?.row?.note}>
                <IconInfoCircle className={"text-amber-500"} />
              </Tooltip>
            ] : []),
            <IconButton onClick={() => {

            }}>
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
      transactionId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      username: faker.internet.userName().toLowerCase(),
      category: faker.helpers.arrayElement(['Papara', 'Payfix', "CepBank"]),
      provider: faker.helpers.arrayElement(['Papara Key', 'Garanti', "Finansbank"]),
      requestTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      note: "Some note "+uniqueId()
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
        title={title}
      />

        <ParentCard title={(
          <Box className={"flex gap-2 items-center"}>
            <Button variant={"text"} color={"success"}>{t("pages.accounting-management.actions.confirm")}</Button>
            <Button variant={"text"} color={"warning"}>{t("pages.accounting-management.actions.doWaiting")}</Button>
            <Button variant={"text"} color={"error"}>{t("pages.accounting-management.actions.cancel")}</Button>
            <Divider orientation={"vertical"} />
            <Button variant={"text"} color={"info"}>{t("pages.accounting-management.actions.sendToField")}</Button>
          </Box>
        )} action={(
          <Fragment>
          <FilterModal
            filter={filter}
            updateFilter={updateFilter}
            resetFilter={() => {
              setFilter({});
              setData(prev => ({ ...prev, filter: {} }));
            }}
            onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
          />
            <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
              <IconButton color={'primary'} onClick={() => {
              }}>
                <IconFileDownload />
              </IconButton>
            </Tooltip>
          </Fragment>
        )}>
        <DataTable
          checkboxSelection={true}
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
