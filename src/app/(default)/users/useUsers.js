"use client";
import { useEffect, useState } from 'react';
import { IconEye } from '@tabler/icons-react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import {uniqueId} from "lodash";
import UserIcons from "@/app/(default)/components/users/UserIcons";
import Link from '@mui/material/Link';

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
      },
      {
        field: "username",
        headerName: "Username",
        flex: 1,
        renderCell: (e) => {
          return (
            <Link href={`/users/${e?.row?.username}`} rel="noopener noreferrer" className={"no-underline text-blue-900"}>{e.value}</Link>
          )
        }
      },
      {
        field: "name",
        headerName: "Name",
        flex: 0.7
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
      // {
      //   field: 'actions',
      //   type: 'actions',
      //   getActions: (e) => {
      //     return [
      //         <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
      //           <IconEye />
      //         </IconButton>
      //         // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
      //         //   <IconPencil />
      //         // </IconButton>
      //     ]
      //   }
      // }
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

  return {
    users: data
  }
}
