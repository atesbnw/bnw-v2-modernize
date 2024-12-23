"use client";
import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconFileDownload } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import { t } from 'i18next';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/users/game-management/FilterModal';
import Typography from '@mui/material/Typography';
import NewManuelTransactionAddWithID from '@/app/(default)/components/merchants/financial-transactions/NewManuelTransactionAddWithID';
import { faker } from '@faker-js/faker';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import TitleBar from '@/app/components/TitleBar';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import GameActionModal from '@/app/(default)/components/game-management/GameActionModal';

function TransactionsTable() {
  const params = useParams();
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
        field: 'gameName',
        headerName: t('pages.user-management.game-management.gameName'),
        flex:1,
      },
      {
        field: 'gameId',
        headerName: t('pages.user-management.game-management.gameId'),
      },
      {
        field: 'homeOrder',
        headerName: t('pages.user-management.game-management.homeOrder'),
      },
      {
        field: 'lobbyOrder',
        headerName: t('pages.user-management.game-management.lobbyOrder'),
      },
      {
        field: 'category',
        headerName: t('pages.user-management.game-management.category'),
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
      //   headerName: t('pages.user-management.game-management.Locked'),
      //   renderCell: ({ value }) => (
      //     <Box className={"flex gap-2 items-center"}>
      //       <CustomSwitch
      //         // onChange={() => {}}
      //         defaultChecked={value}
      //       />
      //     </Box>
      //   )
      //   // width: 200
      // },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <GameActionModal
              id={e?.id}
              data={e?.row}
            />,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(50)).map((_,i) => ({
      id: uniqueId(),
      logo: faker.helpers.arrayElement(['https://igrikazino.com/wp-content/uploads/2023/12/Flaming-Hot-Slot.jpg','https://www.egt.com/wp-content/uploads/2022/09/egt_games_general_series_green_general_40_burning_hot-1.png','https://www.egt.com/wp-content/uploads/2023/02/egt_games_general_series_red_general_20_dazzling_hot.png','https://www.egt.com/wp-content/uploads/2023/02/egt_games_general_series_red_general_almighty_ramses_ii_both_ways.png']),
      gameName: faker.helpers.arrayElement(['Flaming Hot', '40 Burning Hot', '20 Dazzling Hot','40 Lucky King','ALMIGHTY RAMSES II BOTH WAYS']),
      provider: faker.helpers.arrayElement(["EGT", 'Nentent', 'Evolution', "Pragmatic Play", "Booming Games"]),
      gameId: faker.datatype.number({ min: 1, max: 100 }).toString(),
      homeOrder: faker.datatype.number({ min: 1, max: 100 }).toString(),
      lobbyOrder: i+1,
      category: faker.helpers.arrayElement(['Popular Slots', 'Video Slots', 'no category','New Games']),
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
      <Stack direction={'row'} justifyContent={'end'} className={'pb-4'} sx={{pt: 4, pb:2}}>
        <TitleBar
          title={t("menu.Game Management.Live Casino Management")}
          link={"../live-casino-management"}
          subTitle={decodeURIComponent(params?.cid).replace(/^\//, '')}
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

        <DataTable
          // checkboxSelection={true}
          search={false}
          data={data}
          toolbar={false}
          rowReordering={true}
        />
    </Fragment>
  );
}

export default memo(TransactionsTable);
