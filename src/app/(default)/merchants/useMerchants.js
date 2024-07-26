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
        headerName: "Merchant ID",
        flex: 0.6
      },
      {
        field: "merchantName",
        headerName: "Merchant Name",
        flex:1
      },
      {
        field: "totalMembers",
        headerName: "Total Members",
        flex:1
      },
      {
        field: "merchantOpenDate",
        headerName: "Merchant Open Date",
        flex:1
      },
      {
        field: "memberGroup",
        headerName: "Member Group",
        flex:1
      },
      {
        field: "lastMemberRegisterDate",
        headerName: "Last Member Register Date",
        flex:1
      },
      {
        field: "lastPlayingGame",
        headerName: "Last Playing Game",
        flex:1
      },
      {
        field: "lastLoginDate",
        headerName: "Last Login",
        flex:1
      },
      {
        field: "currentBalance",
        headerName: "Current Balance",
        flex:1
      },
      {
        field: "profit",
        headerName: "Profit",
        flex:1
      },
      {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: (e) => {
          return [
              <IconButton onClick={() => router.push(`/merchants/${e?.row?.merchantName}`)}>
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
