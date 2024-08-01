"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import DataTable from '@/app/components/shared/DataTable';
import Stack from "@mui/material/Stack";
import React, {useCallback, useEffect, useState} from "react";
import FilterModal from "@/app/(default)/components/users/users-list/FilterModal";
import {Box} from '@mui/material';
import {useRouter} from "next/navigation";
import UserIcons from "@/app/(default)/components/users/UserIcons";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import Lejand from '@/app/components/shared/Lejand';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const [filter, setFilter] = useState({});

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/users`,
      title: "Users.bc.User Management",
    }
  ];

  const router = useRouter();
  const [data, setData] = useState({
    page: 1,
    pageSize: 25,
    totalData: 25,
    totalPage: 1,
    columns: [],
    rows: []
  });

  useEffect(() => {
    const columns = [
      {
        field: "uuid",
        headerName: "UID",
      },
      {
        field: "username",
        headerName: "Username",
        flex: 1,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 0.7,
      },
      {
        field: "birthday",
        headerName: "Birthday",
      },
      {
        field: "ip",
        headerName: "IP",
      },
      {
        field: "registerDate",
        headerName: "Register Date",
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login Date",
      },
      {
        field: "balance",
        headerName: "Balance",
      },
      {
        field: "status",
        headerName: "Status",
        width: 330,
        cellClassName:"centerAll",
        renderCell: (e) => {
          return (
            <UserIcons/>
          )
        }
      }
    ];
    const rows = Array.from(Array(50)).map((i,_) => (
      {
        id: uniqueId(),
        uuid: faker.datatype.number({ min: 9000, max: 99999 }),
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        birthday: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        ip: faker.internet.ipv4(),
        registerDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        lastLoginDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        balance: faker.number.float(10),
      }
    ));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1))
    }))
  }, []);

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return (
    <Box>
      <Breadcrumb title={t("Users.bc.User Management")} items={BCrumb} />

      <Stack spacing={2} direction={"row"} justifyContent={"space-between"} className={"mb-3"}>
        <Lejand />

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
        withSideMenu={false}
        data={data}
        toolbar={false}
        onRowClick={(e) => router.push(`/users/${e?.row?.username}`)}
      />

    </Box>
  );
}

export default Page;
