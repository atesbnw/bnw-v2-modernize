"use client";
import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconEye, IconFileDownload, IconInfoCircle } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { t } from 'i18next';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/game-management/admin-address/FilterModal';
import { faker } from '@faker-js/faker';
import TitleBar from '@/app/components/TitleBar';
import { useParams, useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import ActionModal from '@/app/(default)/components/game-management/admin-address/ActionModal';
import Box from '@mui/material/Box';

function AdminAddress() {
  const theme = useTheme();
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
        field: 'providerID',
        headerName: t('pages.user-management.game-management.providerID'),
        // width: 200
      },
      {
        field: 'provider',
        headerName: t('pages.user-management.game-management.providerName'),
        flex:1,
        // width: 200
      },
      {
        field: 'category',
        headerName: t('pages.game-management.admin-address.category'),
        // width: 200
      },
      {
        field: 'lastEditOperator',
        headerName: t('pages.game-management.admin-address.lastEditOperator'),
        sortable: false
        // width: 200
      },
      {
        field: 'updatedAt',
        headerName: t('pages.game-management.admin-address.updatedAt'),
        // width: 200
      },
      {
        field: 'username',
        headerName: t('pages.game-management.admin-address.username'),
        sortable: false
        // width: 200
      },
      {
        field: 'password',
        headerName: t('pages.game-management.admin-address.password'),
        sortable: false
        // width: 200
      },
      {
        field: 'backofficeUrl',
        headerName: t('pages.game-management.admin-address.backofficeUrl'),
        sortable: false
        // width: 200
      },
      // {
      //   field: 'note',
      //   headerName: t('pages.game-management.admin-address.note'),
      //   sortable: false,
      //   renderCell: ({ value }) => {
      //     return (
      //       <Tooltip title={value}>
      //         <Box className={"flex items-center justify-center w-full"}>
      //           <IconInfoCircle color={theme.palette.warning.main} />
      //         </Box>
      //       </Tooltip>
      //     )
      //   }
      //   // width: 200
      // },

      {
        field: 'actions',
        type: 'actions',
        cellClassName: 'centerAll',
        width: 170,
        getActions: (e) => {
          return [
            <Tooltip title={e?.row?.note}>
              <Box className={"flex items-center justify-center w-full"}>
                <IconInfoCircle color={theme.palette.warning.main} />
              </Box>
            </Tooltip>,
            <ActionModal data={e?.row} id={e?.id} />,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(50)).map(() => ({
      id: uniqueId(),
      providerID: faker.datatype.number({ min: 1, max: 100 }).toString(),
      provider: faker.helpers.arrayElement(['Egt', 'Invision']),
      category: faker.company.catchPhrase(),
      lastEditOperator: faker.internet.userName(),
      updatedAt: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      backofficeUrl: "https://backoffice.com/egt",
      note: "Need vpn for access"

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
          title={t("menu.Game Management.Admin Address")}
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


        <ActionModal />

      </Stack>

      <DataTable
        checkboxSelection={false}
        search={false}
        data={data}
        toolbar={false}
      />
    </Fragment>
  );
}

export default memo(AdminAddress);
