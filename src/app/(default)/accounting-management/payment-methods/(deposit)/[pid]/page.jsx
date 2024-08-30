"use client";
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/finance-management/payment-methods/FilterModal';
import { useParams, useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import {
  IconFileDownload,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tooltip from '@mui/material/Tooltip';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import PaymentMethodsActionModal from '@/app/(default)/components/finance-management/payment-methods/ActionModal';

function Page() {
  const title = t("pages.accounting-management.deposit");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const router = useRouter();
  const params = useParams();
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
        field: 'logo',
        headerName: t('pages.user-management.user_management_settings.Logo'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <img src={value} className={"w-20 h-20 rounded bg-white object-contain"} alt={"provider"} />
            {/*<Typography className={"flex-1"} variant={"body1"}>{value}</Typography>*/}
            {/*<NewManuelTransactionAddWithID id={value} />*/}
          </Box>
        )
        // width: 200
      },
      {
        field: 'methodId',
        headerName: t('pages.accounting-management.methodId'),
        flex:1,
      },
      {
        field: 'methodName',
        headerName: t('pages.accounting-management.methodName'),
        flex:1,
      },
      {
        field: 'depositGroup',
        headerName: t('pages.accounting-management.depositGroup'),
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
      },
      {
        field: 'minAmount',
        headerName: t('pages.accounting-management.minAmount'),
        flex:1,
      },
      {
        field: 'maxAmount',
        headerName: t('pages.accounting-management.maxAmount'),
        flex:1,
      },
      {
        field: 'transactionTime',
        headerName: t('pages.accounting-management.transactionTime'),
        flex:1,
      },
      {
        field: 'status',
        headerName: t('pages.accounting-management.status'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <CustomSwitch
              // onChange={() => {}}
              defaultChecked={value}
            />
          </Box>
        )
        // width: 200
      },
      {
        field: 'popular',
        headerName: t('pages.accounting-management.popular'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <CustomSwitch
              // onChange={() => {}}
              defaultChecked={value}
            />
          </Box>
        )
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <PaymentMethodsActionModal id={e?.id} data={e?.row} />,
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map((i,_) => ({
      id: uniqueId(),
      logo: faker.image.avatar(),
      methodId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      methodName: faker.helpers.arrayElement(['Papara KEY', 'Garanti Pay', 'Turbo Havale']),
      depositGroup: faker.helpers.arrayElement(['Papara Methods', 'Other']),
      category: "Papara",
      provider: "Papapara Key",
      minAmount:  faker.datatype.number({ min: 100, max: 9999 }).toString(),
      maxAmount:  faker.datatype.number({ min: 1000, max: 99999 }).toString(),
      transactionTime: faker.helpers.arrayElement(['1-15 min', '10-30 min']),
      status: faker.helpers.arrayElement([true, false]),
      popular: faker.helpers.arrayElement([true, false])
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
              link={"../payment-methods"}
              subTitle={decodeURIComponent(params?.pid)}
            />
          </Box>
        )} action={(
          <Fragment>
            {/*<Tooltip title={t('pages.accounting-management.createNewGroup')}>*/}
            {/*  <IconButton variant={"text"} color={"primary"} onClick={() => {*/}

            {/*  }}>*/}
            {/*    <IconPentagonPlus />*/}
            {/*  </IconButton>*/}
            {/*</Tooltip>*/}
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
          rowReordering={true}
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
