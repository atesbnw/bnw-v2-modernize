import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import IconButton from '@mui/material/IconButton';
import {
  IconBadge,
  IconBellDollar,
  IconBorderStyle2,
  IconDeviceWatch,
  IconPencil,
  IconPuzzle,
  IconStar,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import ActionModal from '@/app/(default)/components/game-management/category-management/ActionModal';

export const useCasinoCategoryManagement = ({onChange = () => {}}) => {
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
        field: 'icon',
        headerName: t('pages.user-management.game-management.Icon'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            {value && value}
          </Box>
        )
        // width: 200
      },
      {
        field: 'categoryID',
        headerName: t('pages.user-management.game-management.categoryID'),
        // width: 200
      },
      {
        field: 'categoryName',
        headerName: t('pages.user-management.game-management.categoryName'),
        flex:1,
        // width: 200
      },
      {
        field: 'categoryOrder',
        headerName: t('pages.user-management.game-management.categoryOrder'),
        // width: 200
      },
      {
        field: 'createdAt',
        headerName: t('pages.user-management.game-management.createdAt'),
        // width: 200
      },
      {
        field: 'status',
        headerName: t('pages.user-management.game-management.status'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <CustomSwitch
              // onChange={() => {}}
              readOnly
              checked={value}
            />
          </Box>
        )
        // width: 200
      },
      {
        field: 'operator',
        headerName: t('pages.user-management.game-management.operator'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <ActionModal
              data={e?.row}
              id={e?.id}
            />
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(50)).map((i,_) => ({
      id: uniqueId(),
      icon: faker.helpers.arrayElement([<IconStar />, <IconDeviceWatch />, <IconBorderStyle2 />, <IconBellDollar />, <IconPuzzle />, <IconBadge /> ]), //
      categoryID: faker.datatype.number({ min: 1, max: 100 }).toString(),
      categoryOrder: _+1,
      createdAt: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      categoryName: faker.company.catchPhrase(),
      operator: faker.internet.userName(),
      status: faker.datatype.boolean(),
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);


  return {
    data,
    setData
  }

}
