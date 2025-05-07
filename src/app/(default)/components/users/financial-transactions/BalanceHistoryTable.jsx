import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import { Faker, tr, fakerTR } from '@faker-js/faker';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewManuelTransactionAddWithID
  from '@/app/(default)/components/merchants/financial-transactions/NewManuelTransactionAddWithID';
import classNames from 'classnames';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function TransactionsTable({type = "transaction" || "balance"}) {
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
        field: 'transactionId',
        width:150,
        headerName: 'Transaction Id',
        renderCell: (e) => {
          const { value } = e;
          const status = String(e?.row?.transactionType)==="Deposit" && String(e?.row?.status)?.toLowerCase();

          return(
            <Box className={classNames("flex gap-2 items-center w-full h-full pl-3 p-1.5", {
              "bg-green-500": status==="completed",
              "bg-blue-400": status==="new",
              "bg-red-500": status==="canceled",
            })}>
              <Typography className={"flex-1"} variant={"body1"}>{value}</Typography>
              <NewManuelTransactionAddWithID id={value} />
            </Box>
          )
        }
        // width: 200
      },
      {
        field: 'transactionDate',
        headerName: 'Transaction Date',
        // width: 200
      },
      {
        field: 'transactionType',
        headerName: 'Transaction Type',
        // width: 200
      },
      {
        field: 'category',
        headerName: 'Category',
        flex: 1,
        // width: 200
      },
      {
        field: 'subCategory',
        headerName: 'Sub Category',
        // width: 200
      },
      {
        field: 'transactionDetail',
        headerName: 'Transaction Detail',
        // width: 200
      },
      {
        field: 'transactionFlow',
        headerName: 'Transaction Flow',
        // width: 200
      },
      {
        field: 'amount',
        headerName: 'Amount',
        // width: 200
      },
      {
        field: 'beforeBalance',
        headerName: 'Before Balance',
        // width: 200
      },
      {
        field: 'status',
        headerName: 'Status',
        // width: 200
      },
      {
        field: 'device',
        headerName: 'Device',
        // width: 200
      },
      // {
      //   field: 'actions',
      //   type: 'actions',
      //   width: 170,
      //   getActions: (e) => {
      //     return [
      //       <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
      //         <IconEye />
      //       </IconButton>,
      //       // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
      //       //   <IconPencil />
      //       // </IconButton>
      //     ]
      //   }
      // }
    ];

    const rows = Array.from(Array(50)).map(() => ({
      id: uniqueId(),
      transactionId: faker.datatype.number({ min: 100000000, max: 999000000 }),
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      transactionType: faker.helpers.arrayElement(['Deposit', 'Withdraw', 'Payment', 'Transfer']),
      category: faker.helpers.arrayElement(['Pragmatic', 'EGT', 'Bet','Papara','Deposit','Bank Transfer']),
      subCategory: faker.helpers.arrayElement(['Papara Key', 'Bankamatik', 'Visa', 'Mastercard']),
      transactionDetail: faker.helpers.arrayElement(['Detail text']),
      transactionFlow: faker.helpers.arrayElement(['Request', 'Approve', 'Reject']),
      amount: faker.commerce.price(100, 1000, 2) + '₺',
      beforeBalance: faker.commerce.price(0, 500, 2) + '₺',
      status: faker.helpers.arrayElement(['New', 'Completed', 'Canceled']),
      device: faker.helpers.arrayElement(['iPhone 14 Pro', 'Samsung Galaxy S21', 'Huawei P30', 'Xiaomi Mi 11']),
    }));

    setData((prev) => ({
      ...prev,
      columns: columns?.filter(f => type==="transaction" ? true : !["transactionDetail","transactionFlow"]?.includes(f?.field)),
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);


  return (
    <Fragment>
      <DataTable
        search={false}
        data={data}
        toolbar={false}
      />
    </Fragment>
  );
}

export default memo(TransactionsTable);
