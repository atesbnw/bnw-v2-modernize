"use client";
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/finance-management/FilterModal';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import {
  IconCheck,
  IconChevronRight,
  IconFileDownload,
  IconInfoCircle,
  IconPentagonPlus,
  IconX,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ChildCard from '@/app/components/shared/ChildCard';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import PaymentMethodsGroupModal from '@/app/(default)/components/finance-management/PaymentMethodsGroupModal';

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
        field: 'groupId',
        headerName: t('pages.accounting-management.groupId'),
        flex:1,
      },
      {
        field: 'groupName',
        headerName: t('pages.accounting-management.groupName'),
        flex:1,
      },
      {
        field: 'groupOrder',
        headerName: t('pages.accounting-management.groupOrder'),
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
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <PaymentMethodsGroupModal id={e?.id} data={e?.row} />,
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map((i,_) => ({
      id: uniqueId(),
      logo: faker.image.avatar(),
      groupId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      groupName: faker.helpers.arrayElement(['PAPARA', 'BANK TRANSFER', "CARDLESS TRANSACTIONS", "CRYPTO"]),
      groupOrder: _+1,
      status: faker.helpers.arrayElement([true, false])
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
            <PaymentMethodsGroupModal />
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
