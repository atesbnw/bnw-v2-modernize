"use client";
import React, {memo, useState, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from "@/app/components/TitleBar";
import ActionModal from "@/app/(default)/components/users/settings/ActionModal";
import Box from "@mui/material/Box";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";
import {uniqueId} from "lodash";
import {faker} from "@faker-js/faker";
import DataTable from "@/app/components/shared/DataTable";
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 10,
    totalPage: 1,
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const columns = [
      {
        field: 'category',
        headerName: t('pages.user-management.user_management_settings.Category'),
        // width: 200
      },
      {
        field: 'provider',
        headerName: t('pages.user-management.user_management_settings.Provider'),
        // width: 200
      },
      {
        field: 'game',
        headerName: t('pages.user-management.user_management_settings.Game'),
        flex:1,
        // width: 200
      },
      {
        field: 'limitDuration',
        headerName: t('pages.user-management.user_management_settings.Limit Duration'),
        flex:1,
        // width: 200
      },
      {
        field: 'description',
        headerName: t('pages.user-management.user_management_settings.Description'),
        flex:1,
        // width: 200
      },
      {
        field: 'limitAmount',
        headerName: t('pages.user-management.user_management_settings.Limit Amount'),
        flex:1,
        // width: 200
      },
      // {
      //   field: 'blockAll',
      //   headerName: t('pages.user-management.user_management_settings.Block All'),
      //   renderCell: ({ value }) => (
      //     <Box className={"flex gap-2 items-center"}>
      //       <CustomSwitch
      //         disabled
      //         // onChange={() => {}}
      //         defaultChecked={value}
      //       />
      //     </Box>
      //   )
      // },
      {
        field: 'status',
        headerName: t('pages.user-management.user_management_settings.Status'),
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <CustomSwitch
              // onChange={() => {}}
              defaultChecked={value}
            />
          </Box>
        )
      },
    ];

    const rows = Array.from(Array(10)).map(() => ({
      id: uniqueId(),
      category: faker.helpers.arrayElement(['Casino', 'Poker']),
      provider: faker.helpers.arrayElement(['Pragmatic', 'EGT', 'ABC']),
      game: faker.helpers.arrayElement(['Sweet Bonanza', '20 Burning Hot', 'Spaceman']),
      limitDuration: faker.helpers.arrayElement(['Hourly', 'Daily', 'Weekly']),
      limitAmount: faker.datatype.number({ min: 1, max: 10 }).toString(),
      // blockAll: faker.datatype.boolean(),
      description: "Lorem Ipsum",
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

  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Users.Settings Menu.Live Casino Limitations')}
        Right={<ActionModal modalTitle={t('menu.Users.Settings Menu.Create Live Casino Limitations', 'Create Live Casino Limitations')} />}
      />
      <ParentCard title={t('pages.user-management.user_management_settings.Current Limits')}>
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
