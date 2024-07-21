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
import FilterModal from '@/app/(default)/components/merchants/dashboard/FilterModal';
import Typography from '@mui/material/Typography';
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
        field: 'userId',
        headerName: t("pages.merchants.dashboard.User ID"),
        // height: 500
      },
      {
        field: 'username',
        headerName: t("pages.merchants.dashboard.Username"),
        // width: 200
      },
      {
        field: 'nameSurname',
        headerName: t("pages.merchants.dashboard.Name Surname"),
        flex: 1,
        // width: 200
      },
      {
        field: 'totalDeposit',
        headerName: t("pages.merchants.dashboard.Total Deposit"),
        // width: 200
      },
      {
        field: 'totalWithdraw',
        headerName: t("pages.merchants.dashboard.Total Withdraw"),
        // width: 200
      },
      {
        field: 'totalBonus',
        headerName: t("pages.merchants.dashboard.Total Bonus"),
        // width: 200
      },
      {
        field: 'played',
        headerName: t("pages.merchants.dashboard.played"),
        // width: 200
      },
      {
        field: 'winning',
        headerName: t("pages.merchants.dashboard.Winning"),
        // width: 200
      },
      {
        field: 'difference',
        headerName: t("pages.merchants.dashboard.Difference"),
        // width: 200
      },
      {
        field: 'memberBalance',
        headerName: t("pages.merchants.dashboard.Member Balance"),
        // width: 200
      },
      {
        field: 'merchantProgressPayment',
        headerName: t("pages.merchants.dashboard.Dealer Progress Payment"),
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
      userId: uniqueId(),
      username: "eren_bonus",
      nameSurname: "Eren Erdi",
      totalDeposit: faker.commerce.price(1000, 100000, 2) + '₺',
      totalWithdraw: faker.commerce.price(1000, 100000, 2) + '₺',
      totalBonus: faker.commerce.price(1000, 100000, 2) + '₺',
      played: faker.commerce.price(1000, 100000, 2) + '₺',
      winning: faker.commerce.price(1000, 100000, 2) + '₺',
      difference: faker.commerce.price(1000, 100000, 2) + '₺',
      memberBalance: faker.commerce.price(1000, 100000, 2) + '₺',
      merchantProgressPayment: faker.commerce.price(1000, 100000, 2) + '₺'
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
        title={t('pages.merchants.dashboard.Merchant Member List')}
        action={
          <Stack direction="row" spacing={2}>
            <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
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
