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
        flex: 0.6
      },
      {
        field: "username",
        headerName: "Username",
        flex: 1
      },
      {
        field: "name",
        headerName: "Name",
        // flex: 0.1,
        flex: 1
      },
      {
        field: "birthday",
        headerName: "Birthday",
        flex: 1
      },
      {
        field: "ip",
        headerName: "IP",
        flex: 1
      },
      {
        field: "registerDate",
        headerName: "Register Date",
        flex: 1
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login Date",
        flex: 1
      },
      {
        field: "balance",
        headerName: "Balance",
        flex: 1
      },
      {
        field: "status",
        headerName: "Status",
        flex: 0.6,
        cellClassName:"centerAll",
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 0.4,
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
