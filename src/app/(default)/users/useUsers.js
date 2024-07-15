"use client";

import { useEffect, useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { IconEye, IconPencil } from '@tabler/icons-react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';

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
        field: "username",
        headerName: "Username",
        // width: 200
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
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
        width: 170,
        getActions: (e) => {
          return [
              <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
                <IconEye />
              </IconButton>
          ]
        }
      }
    ];
    const rows = Array.from(Array(50)).map((i,_) => (
      {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        name: faker.person.fullName(),
        birthday: faker.date.birthdate(),
        ip: faker.internet.ipv4(),
        registerDate: faker.date.birthdate(),
        lastLoginDate: faker.date.birthdate(),
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
