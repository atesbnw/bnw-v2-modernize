"use client";

import { useEffect, useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { IconEye, IconPencil } from '@tabler/icons-react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import {uniqueId} from "lodash";

const faker = new Faker({
  locale: [fakerTR, tr],
});

export function useUsers() {
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
        // width: 200
      },
      {
        field: "username",
        headerName: "Username",
        // width: 200
      },
      {
        field: "name",
        headerName: "Name",
        flex: 0.1,
        // width: 200
      },
      {
        field: "birthday",
        headerName: "Birthday",
        // width: 200
      },
      {
        field: "ip",
        headerName: "IP",
        // width: 200
      },
      {
        field: "registerDate",
        headerName: "Register Date",
        // width: 200
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login Date",
        // width: 200
      },
      {
        field: "balance",
        headerName: "Balance",
        // width: 200
      },
      {
        field: "status",
        headerName: "Status",
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: (e) => {
          return [
              <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
                <IconEye />
              </IconButton>,
              // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
              //   <IconPencil />
              // </IconButton>
          ]
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
        status: "active"
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

  return {
    users: data
  }
}
