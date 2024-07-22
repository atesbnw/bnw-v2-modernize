import React, { memo, useState, useCallback, useEffect, Fragment } from 'react';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconFileDownload, IconFilter, IconFilterX } from '@tabler/icons-react';
import { Faker, tr, fakerTR } from '@faker-js/faker';
import { uniqueId } from 'lodash';
import { t } from 'i18next';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import FilterModal from '@/app/(default)/components/operator-management/dashboard/FilterModal';
import ParentCard from '@/app/components/shared/ParentCard';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function TransactionsTable() {
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
        headerName: t("pages.operator-management.dashboard.Transaction ID"),
        // height: 500
      },
      {
        field: 'username',
        headerName: t("pages.operator-management.dashboard.Username"),
        flex: 1,
        // width: 200
      },
      {
        field: 'userId',
        headerName: t("pages.operator-management.dashboard.User ID"),
        // width: 200
      },
      {
        field: 'transactionType',
        headerName: t("pages.operator-management.dashboard.Transaction Type"),
        // width: 200
      },
      {
        field: 'category',
        headerName: t("pages.operator-management.dashboard.Category"),
        // width: 200
      },
      {
        field: 'subCategory',
        headerName: t("pages.operator-management.dashboard.Sub Category"),
        // width: 200
      },
      {
        field: 'transactionFlow',
        headerName: t("pages.operator-management.dashboard.Transaction Flow"),
        // width: 200
      },
      {
        field: 'transactionDate',
        headerName: t("pages.operator-management.dashboard.Transaction Date"),
        // width: 200
      },
      {
        field: 'ip',
        headerName: t("pages.operator-management.dashboard.IP"),
        // width: 200
      },
      {
        field: 'amount',
        headerName: t("pages.operator-management.dashboard.Amount"),
        // width: 200
      },
    ];

    const rows = Array.from(Array(50)).map(() => ({
      id: uniqueId(),
      transactionId: faker.datatype.number({ min: 100000000, max: 999000000 }),
      username: faker.internet.userName(),
      userId: faker.datatype.number({ min: 100000000, max: 999000000 }),
      transactionType: faker.helpers.arrayElement(['Yatırım', 'Çekim', 'Ödeme', 'Transfer']),
      category: faker.helpers.arrayElement(['Papara', 'Banka', 'Kredi Kartı', 'Nakit']),
      subCategory: faker.helpers.arrayElement(['Papara Key', 'Bankamatik', 'Visa', 'Mastercard']),
      transactionFlow: faker.helpers.arrayElement(['Talep', 'Onay', 'Red']),
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      ip: faker.internet.ip(),
      amount: faker.commerce.price(100, 1000, 2) + '₺',
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
      <ParentCard
        title={t('pages.operator-management.dashboard.Transaction List')}
        action={
          <Stack direction="row" spacing={2}>
            <Tooltip title={t('i.downloadCSV')}>
              <IconButton color={'primary'} onClick={() => {}}>
                <IconFileDownload />
              </IconButton>
            </Tooltip>

            <FilterModal
              filter={filter}
              updateFilter={updateFilter}
              resetFilter={() => {
                setFilter({});
                setData(prev => ({ ...prev, filter: {} }));
              }}
              onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
            />
          </Stack>
        }
      >
        <DataTable
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Fragment>
  );
}

export default memo(TransactionsTable);
