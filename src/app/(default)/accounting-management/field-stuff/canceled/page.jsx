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
import { Faker, fakerTR, tr } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const title = t("pages.accounting-management.canceled");
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
        renderCell:({value}) => (
          <Box className={"w-full h-full py-0.5"}>
            <Typography variant={"body2"} className={"bg-red-500/20 w-full h-full flex items-center justify-center"}>
              {value}
            </Typography>
          </Box>
        )
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
        field: 'fullName',
        headerName: t('pages.accounting-management.fullName'),
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
        field: 'confirmedAt',
        headerName: t('pages.accounting-management.confirmedAt'),
        flex:1,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.accounting-management.amount'),
        // width: 200
      },
      {
        field: 'device',
        headerName: t('pages.accounting-management.device'),
        // width: 200
      },
      {
        field: 'fieldStuff',
        headerName: t('pages.accounting-management.fieldStuff'),
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
            // <IconButton onClick={() => {
            //
            // }}>
            //   <IconChevronRight />
            // </IconButton>,
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
      fullName: faker.person.fullName(),
      username: faker.internet.userName().toLowerCase(),
      category: faker.helpers.arrayElement(['Papara', 'Payfix', "CepBank"]),
      provider: faker.helpers.arrayElement(['Papara Key', 'Garanti', "Finansbank"]),
      requestTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      confirmedAt: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      device: faker.helpers.arrayElement(["iPhone 15 Pro Max", "iPhone 6s", "iPhone 7", "iPhone 8", "iPhone 9", "iPhone 10"]),
      fieldStuff: faker.internet.userName().toLowerCase(),
      note: "Some note "+uniqueId(),
      bank: faker.helpers.arrayElement(['AKBANK', 'FİNANSBANK', "GARANTİ"]),
      iban: "TR"+faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      accountCode: faker.datatype.number({ min: 100, max: 999 }).toString(),
      accountNo: faker.datatype.number({ min: 10000, max: 99999 }).toString(),
      idNumber: faker.datatype.number({ min: 1000000, max: 9999999 }).toString()
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


        <ParentCard title={(
          <Box className={"flex gap-2 items-center"}>
            <TitleBar
              title={title}
            />
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
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
