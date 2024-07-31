"use client";

import { useEffect, useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { IconEye, IconPencil } from '@tabler/icons-react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';
import {uniqueId} from "lodash";
import Link from "@mui/material/Link";

const faker = new Faker({
  locale: [fakerTR, tr],
});

export function useMerchants() {
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
        headerName: "Merchant ID"
      },
      {
        field: "merchantName",
        headerName: "Merchant Name",
        flex: 1,
        renderCell: (e) => {
          return (
            <Link href={`/merchants/${e?.row?.merchantName}`} rel="noopener noreferrer" className={"no-underline text-blue-900"}>{e.value}</Link>
          )
        }
      },
      {
        field: "totalMembers",
        headerName: "Total Members"
      },
      {
        field: "merchantOpenDate",
        headerName: "Merchant Open Date"
      },
      {
        field: "memberGroup",
        headerName: "Member Group"
      },
      {
        field: "lastMemberRegisterDate",
        headerName: "Last Member Register Date"
      },
      {
        field: "lastPlayingGame",
        headerName: "Last Playing Game"
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login"
      },
      {
        field: "currentBalance",
        headerName: "Current Balance"
      },
      {
        field: "profit",
        headerName: "Profit"
      }
    ];
    const rows = Array.from(Array(50)).map((i,_) => (
      {
        id: uniqueId(),
        uuid: faker.datatype.number({ min: 9000, max: 99999 }),
        merchantName: faker.internet.userName().toLocaleLowerCase(),
        totalMembers: faker.datatype.number({ min: 10, max: 250 }),
        merchantOpenDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        memberGroup: faker.internet.userName().toLocaleLowerCase(),
        lastMemberRegisterDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        lastPlayingGame: faker.helpers.arrayElement(['Wild & Turkey', 'legolas']),
        lastLoginDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
        currentBalance: faker.commerce.price(1000, 50000, 2) + '₺',
        profit: faker.commerce.price(1000, 50000, 2) + '₺',
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
    merchants: data
  }
}
