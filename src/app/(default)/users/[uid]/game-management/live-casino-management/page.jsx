"use client";
import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconEye, IconFileDownload } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/users/game-management/FilterModal';
import Typography from '@mui/material/Typography';
import NewManuelTransactionAddWithID from '@/app/(default)/components/users/financial-transactions/NewManuelTransactionAddWithID';
import { faker } from '@faker-js/faker';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import TitleBar from '@/app/components/TitleBar';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function TransactionsTable() {
  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});
  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 25,
    totalPage: 1,
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const columns = [
      {
        field: 'logo',
        headerName: t('pages.user-management.game-management.Logo'),
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
        field: 'providerID',
        headerName: t('pages.user-management.game-management.providerID'),
        // width: 200
      },
      {
        field: 'providerName',
        headerName: t('pages.user-management.game-management.providerName'),
        flex:1,
        // width: 200
      },
      {
        field: 'desktop',
        headerName: t('pages.user-management.game-management.Desktop'),
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
        field: 'mobile',
        headerName: t('pages.user-management.game-management.Mobile'),
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
        field: 'lock',
        headerName: t('pages.user-management.game-management.Locked'),
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
            <IconButton onClick={() => router.push(`/users/${params?.uid}/game-management/live-casino-management/${e?.row?.providerName}`)}>
              <IconEye />
            </IconButton>,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(50)).map(() => ({
      id: uniqueId(),
      logo: faker.image.avatar(), // or you can use any placeholder image URL
      providerID: faker.datatype.number({ min: 1, max: 100 }).toString(),
      providerName: faker.company.catchPhrase(),
      desktop: faker.datatype.boolean(),
      mobile: faker.datatype.boolean(),
      lock: faker.datatype.boolean(),
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
      <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>
        <TitleBar
          title={(
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant={"h3"} color={"gray"}>
                {t("menu.Game Management.Live Casino Management")}
              </Typography>
            </Stack>
          )}
        />

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

      <Box sx={{ width: '100%', maxWidth: "65vw" }}>
        <DataTable
          checkboxSelection={true}
          search={false}
          data={data}
          toolbar={false}
        />
      </Box>
    </Fragment>
  );
}

export default memo(TransactionsTable);
