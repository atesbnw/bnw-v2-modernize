import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconFileDownload, IconFilter, IconFilterX } from '@tabler/icons-react';
import { Faker, tr, fakerTR } from '@faker-js/faker';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import Grid from '@mui/material/Grid';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import SideDialog from '@/app/components/shared/SideDialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/merchants/financial-transactions/FilterModal';
import Typography from '@mui/material/Typography';
import NewManuelTransactionAddWithID
  from '@/app/(default)/components/merchants/financial-transactions/NewManuelTransactionAddWithID';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function TransactionsTable() {
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
        renderCell: ({ value }) => (
          <Box className={"flex gap-2 items-center"}>
            <Typography className={"flex-1"} variant={"body1"}>{value}</Typography>
            <NewManuelTransactionAddWithID id={value} />
          </Box>
        )
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
        field: 'Transaction Flow',
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
      transactionType: faker.helpers.arrayElement(['Yatırım', 'Çekim', 'Ödeme', 'Transfer']),
      category: faker.helpers.arrayElement(['Papara', 'Banka', 'Kredi Kartı', 'Nakit']),
      subCategory: faker.helpers.arrayElement(['Papara Key', 'Bankamatik', 'Visa', 'Mastercard']),
      transactionDetail: faker.helpers.arrayElement(['Floaming Hot', 'Roulette', '-']),
      transactionFlow: faker.helpers.arrayElement(['Talep', 'Onay', 'Red']),
      amount: faker.commerce.price(100, 1000, 2) + '₺',
      beforeBalance: faker.commerce.price(0, 500, 2) + '₺',
      status: faker.helpers.arrayElement(['Yeni', 'Tamamlandı', 'İptal']),
      device: faker.helpers.arrayElement(['iPhone 14 Pro', 'Samsung Galaxy S21', 'Huawei P30', 'Xiaomi Mi 11']),
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
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
