import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons-react';
import {Faker, tr, fakerTR} from "@faker-js/faker";
import { uniqueId } from 'lodash';
import { GridToolbarContainer } from '@mui/x-data-grid-pro';
import Box from '@mui/material/Box';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import Grid from '@mui/material/Grid';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
const faker = new Faker({
  locale: [fakerTR, tr],
});

function TransactionsTable() {
  const [filter,setFilter] = useState({});
  const [data, setData] = useState({
    page: 1,
    pageSize: 10,
    totalData: 25,
    totalPage: 1,
    columns: [],
    rows: []
  });

  useEffect(() => {
    const columns = [
      {
        field: "transactionId",
        headerName: "Transaction Id",
        // width: 200
      },
      {
        field: "transactionDate",
        headerName: "Transaction Date",
        // width: 200
      },
      {
        field: "transactionType",
        headerName: "Transaction Type",
        // width: 200
      },
      {
        field: "category",
        headerName: "Category",
        flex: 1,
        // width: 200
      },
      {
        field: "subCategory",
        headerName: "Sub Category",
        // width: 200
      },
      {
        field: "transactionDetail",
        headerName: "Transaction Detail",
        // width: 200
      },
      {
        field: "Transaction Flow",
        headerName: "Transaction Flow",
        // width: 200
      },
      {
        field: "amount",
        headerName: "Amount",
        // width: 200
      },
      {
        field: "beforeBalance",
        headerName: "Before Balance",
        // width: 200
      },
      {
        field: "status",
        headerName: "Status",
        // width: 200
      },
      {
        field: "device",
        headerName: "Device",
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
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1))
    }))
  }, []);

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value
    }))
  }, [])

  return (
    <Fragment>
      <Box>
        <Grid container spacing={3} mb={3}>
          <Grid item sm={3} xs={12}>
            <CustomFormLabel htmlFor="searchText">Search</CustomFormLabel>
            <CustomTextField
              id="searchText"
              name="searchText"
              variant="outlined"
              fullWidth
              value={filter?.searchText}
              onChange={(e) => updateFilter("searchText", e?.target.value)}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <CustomFormLabel htmlFor="transactionDate">Transaction Date</CustomFormLabel>
            <CustomTextField
              id="transactionDate"
              name="transactionDate"
              variant="outlined"
              fullWidth
              value={filter?.transactionDate}
              onChange={(e) => updateFilter("transactionDate", e?.target.value)}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <CustomFormLabel htmlFor="balance">Balance</CustomFormLabel>
            <CustomTextField
              id="balance"
              name="balance"
              variant="outlined"
              fullWidth
              value={filter?.balance}
              onChange={(e) => updateFilter("balance", e?.target.value)}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <CustomFormLabel htmlFor="transactionType">Transaction Type</CustomFormLabel>
            <CustomSelect
              id="transactionType"
              name="transactionType"
              fullWidth
              variant="outlined"
              value={filter?.transactionType}
              onChange={(e) => updateFilter("transactionType", e?.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="deposit">Deposit</MenuItem>
              <MenuItem value="withdraw">Withdraw</MenuItem>
            </CustomSelect>
          </Grid>
        </Grid>
      </Box>

      <DataTable
        search={false}
        data={data}
        toolbar={false}
      />
    </Fragment>
  );
}

export default memo(TransactionsTable);
