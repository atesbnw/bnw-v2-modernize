"use client";
import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconFileDownload } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/users/game-management/FilterModal';
import { faker } from '@faker-js/faker';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import TitleBar from '@/app/components/TitleBar';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ParentCard from "@/app/components/shared/ParentCard";
import Divider from '@mui/material/Divider';

const CustomLockedSwitch = ({id, value}) => {

  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value)
  }, [value]);

  return (
    <Box className={"flex gap-2 items-center"}>
      <CustomSwitch
        disabled={state?.lock}
        onChange={(event,newValue) => {
          setState(prev => ({
            ...prev,
            desktop: newValue
          }))
        }}
        checked={state?.desktop}
      />
      <Divider horizontal={true} />
      <CustomSwitch
        disabled={state?.lock}
        onChange={(event,newValue) => {
          setState(prev => ({
            ...prev,
            mobile: newValue
          }))
        }}
        checked={state?.mobile}
      />
      <Divider horizontal={true} />
      <CustomSwitch
        onChange={(event,newValue) => {
          setState(prev => ({
            ...prev,
            desktop: newValue ? false : prev?.desktop,
            mobile: newValue ? false : prev?.mobile,
            lock: newValue
          }))
        }}
        checked={state?.lock}
      />
    </Box>
  )
};

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

  // const lockedChangeHandler = useCallback((id,newValue) => {
  //   console.log({ id, newValue, data: data?.rows });
  //
  //   setData((prev) => ({
  //     ...prev,
  //     rows: prev?.rows?.map(m => m?.id === id ? ({
  //       ...m,
  //       desktop: newValue ? false : m?.desktop,
  //       mobile: newValue ? false : m?.mobile,
  //     }) : m),
  //   }));
  // }, [data]);

  useEffect(() => {
    const columns = [
      {
        field: 'logo',
        headerAlign: 'center',
        headerName: t('pages.user-management.game-management.Logo'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center justify-center w-full"}>
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
      // {
      //   field: 'lock',
      //   headerName: `${t('pages.user-management.game-management.Locked')}`,
      //   renderCell: ({ value, id }) => (
      //     <Box className={"flex gap-2 items-center"}>
      //       <CustomSwitch
      //         // onChange={() => {}}
      //         defaultChecked={value}
      //       />
      //     </Box>
      //   ),
      //   width: 300
      // },
      {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: (e) => {
          return [
            <IconButton onClick={() => router.push(`/users/${params?.uid}/game-management/casino-management/${e?.row?.providerName}`)}>
              <IconChevronRight />
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
      lock: {
        lock: faker.datatype.boolean(),
        get desktop(){
          return this?.lock ? false : faker.datatype.boolean()
        },
        get mobile(){
          return this?.lock ? false : faker.datatype.boolean()
        }
      }
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
        title={t("menu.Game Management.Casino Management")}
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
          checkboxSelection={false}
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(TransactionsTable);
