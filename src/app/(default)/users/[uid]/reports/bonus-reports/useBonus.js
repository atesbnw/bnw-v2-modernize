"use client";
import { useEffect, useState } from 'react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import { useRouter } from 'next/navigation';
import {uniqueId} from "lodash";
import CheckCircle from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const faker = new Faker({
  locale: [fakerTR, tr],
});

export function useBonus() {
  const router = useRouter();
  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 20,
    totalPage: 1,
    columns: [],
    rows: [],
  });


  useEffect(() => {
    const columns = [
      {
        field: 'bonusType',
        headerName: 'Bonus Type',
        // width: 200
        flex: 1,
      },
      {
        field: 'transferredBonus',
        headerName: 'Transferred Bonus',
        // width: 200
      },
      {
        field: 'creationTime',
        headerName: 'Creation Time',
        // width: 200
      },
      {
        field: 'startTime',
        headerName: 'Start Time',
        // width: 200
      },
      {
        field: 'expirationTime',
        headerName: 'Expiration Time',
        // width: 200
      },
      {
        field: 'checkTime',
        headerName: 'Check Time',
        // width: 200
      },
      {
        field: 'amount',
        headerName: 'Amount',
        // width: 200
      },
      {
        field: 'operator',
        headerName: 'Operator',
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <>
              <CircleIcon color="warning"  />
              <CheckCircle color="success" />
              <InsertDriveFileOutlinedIcon />
            </>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),


      bonusType: faker.helpers.arrayElement(['Deposit', 'Freespin', 'FreeBet']),
      transferredBonus: faker.helpers.arrayElement(['%20 Hoş Geldin Bonusu', 'Pragmatic FreeSpin', '%15 Çevrimli Bonus']),
      creationTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      startTime: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      expirationTime: faker.commerce.price(1000, 100000, 2) + '₺',
      checkTime: faker.commerce.price(1000, 100000, 2) + '₺',
      amount: faker.commerce.price(1000, 100000, 2) + '₺',
      operator: "eren_bonus",
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
    bonusReports: data
  }
}
