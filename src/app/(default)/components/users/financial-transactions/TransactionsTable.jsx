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

const faker = new Faker({
  locale: [fakerTR, tr],
});

function TransactionsTable() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({});
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
        headerName: 'Transaction Id',
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
      <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>


        <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
          <IconButton color={'primary'} onClick={() => {}}>
            <IconFileDownload />
          </IconButton>
        </Tooltip>


        <Tooltip title={t('pages.user-management.user_management_financial_transactions.filter')}>
          <IconButton color={'primary'} onClick={() => setOpen(true)}>
            <IconFilter />
          </IconButton>
        </Tooltip>

        {Object.values(filter)?.some(Boolean) && (
          <Tooltip title={t('pages.user-management.user_management_financial_transactions.clearAllFilter')}>
            <IconButton color={'error'} onClick={() => {
              setFilter({});
              setData(prev => ({ ...prev, filter: {} }));
              setOpen(false);
            }}>
              <IconFilterX />
            </IconButton>
          </Tooltip>
        )}


      </Stack>
      <SideDialog
        title={'Filter'}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.user-management.user_management_financial_transactions.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionDate">{t('pages.user-management.user_management_financial_transactions.transactionDate')}</CustomFormLabel>
                <CustomTextField
                  id="transactionDate"
                  name="transactionDate"
                  variant="outlined"
                  fullWidth
                  value={filter?.transactionDate}
                  onChange={(e) => updateFilter('transactionDate', e?.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="balance">{t('pages.user-management.user_management_financial_transactions.balance')}</CustomFormLabel>
                <CustomTextField
                  id="balance"
                  name="balance"
                  variant="outlined"
                  fullWidth
                  value={filter?.balance}
                  onChange={(e) => updateFilter('balance', e?.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.user-management.user_management_financial_transactions.transactionType')}</CustomFormLabel>
                <CustomSelect
                  id="transactionType"
                  name="transactionType"
                  fullWidth
                  variant="outlined"
                  value={filter?.transactionType || 'all'}
                  onChange={(e) => updateFilter('transactionType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="deposit">Deposit</MenuItem>
                  <MenuItem value="withdraw">Withdraw</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.user-management.user_management_financial_transactions.category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  variant="outlined"
                  value={filter?.category || 'all'}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Papara</MenuItem>
                  <MenuItem value="casino">Casino</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="subcategory">{t('pages.user-management.user_management_financial_transactions.subcategory')}</CustomFormLabel>
                <CustomSelect
                  id="subcategory"
                  name="subcategory"
                  fullWidth
                  variant="outlined"
                  value={filter?.subcategory || 'all'}
                  onChange={(e) => updateFilter('subcategory', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara-key">Papara Key</MenuItem>
                  <MenuItem value="egt">EGT</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionFlow">{t('pages.user-management.user_management_financial_transactions.transactionFlow')}</CustomFormLabel>
                <CustomSelect
                  id="transactionFlow"
                  name="transactionFlow"
                  fullWidth
                  variant="outlined"
                  value={filter?.transactionFlow || 'all'}
                  onChange={(e) => updateFilter('transactionFlow', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="req">Request</MenuItem>
                  <MenuItem value="bet">Bet</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="status">{t('pages.user-management.user_management_financial_transactions.status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  variant="outlined"
                  value={filter?.status || 'all'}
                  onChange={(e) => updateFilter('status', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="device">{t('pages.user-management.user_management_financial_transactions.device')}</CustomFormLabel>
                <CustomSelect
                  id="device"
                  name="device"
                  fullWidth
                  variant="outlined"
                  value={filter?.device || 'all'}
                  onChange={(e) => updateFilter('device', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                </CustomSelect>
              </Grid>


            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth onClick={() => {
              setData(prev => ({ ...prev, filter: filter }));
              setOpen(false);
            }}>{t('pages.user-management.user_management_financial_transactions.filter')}</Button>
          </Fragment>
        )}
      />
      <Box sx={{ width: '100%', maxWidth: "65vw" }}>
        <DataTable
          search={false}
          data={data}
          toolbar={false}
        />
      </Box>
    </Fragment>
  );
}

export default memo(TransactionsTable);
