"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from '@/app/components/TitleBar';
import {Box, Button, InputAdornment, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import Stack from "@mui/material/Stack";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import TotalResults from "@/app/(default)/components/users/reports/TotalResults";
import {uniqueId} from "lodash";
import FilterModal from "@/app/(default)/components/users/reports/live-casino-reports/FilterModal";
import {useParams, useRouter} from "next/navigation";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});

  const titleSubTitle = "EGT";
  const titleProviderLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s";

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
        field: 'providerLogo',
        headerName: '',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll'
        // width: 200
      },
      {
        field: 'gameName',
        headerName: 'Game Name',
        // width: 200
        flex: 1,
      },
      {
        field: 'played',
        headerName: 'Played',
        // width: 200
      },
      {
        field: 'won',
        headerName: 'Won',
        // width: 200
      },
      {
        field: 'difference',
        headerName: 'Difference',
        // width: 200
      },
      {
        field: 'canceled',
        headerName: 'Canceled',
        // width: 200
      },
      {
        field: 'takeBack',
        headerName: 'Take Back',
        // width: 200
      },
      {
        field: 'payback',
        headerName: 'Payback',
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      providerLogo: faker.helpers.arrayElement(['https://static.casino.guru/pict/31244/Flaming-Hot.png?timestamp=1653449168000&imageDataId=214490&width=320&height=247']),
      gameName: faker.helpers.arrayElement(['Flaming Hot', '40 Burning Hot', '20 Dazzling Hot']),
      played: faker.commerce.price(1000, 100000, 2) + '₺',
      won: faker.commerce.price(1000, 100000, 2) + '₺',
      difference: faker.commerce.price(1000, 100000, 2) + '₺',
      canceled: faker.commerce.price(1000, 100000, 2) + '₺',
      takeBack: faker.commerce.price(1000, 100000, 2) + '₺',
      payback: faker.commerce.price(1000, 100000, 2) + '₺',
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

  const totalResultsData = [
    { title: t('pages.merchants.reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Take Back'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
  ];

  return (
    <Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Reports Menu.Casino Reports')}
              link={"../casino-reports"}
              LeftImage={titleProviderLogo}
              subTitle={titleSubTitle}
            />
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
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <TotalResults title={t('pages.merchants.reports.Total')} data={totalResultsData}/>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">

            <Stack direction={'row'} justifyContent={'end'} className={'pb-4'}>
              <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
                <IconButton color={'primary'} onClick={() => {}}>
                  <IconFileDownload />
                </IconButton>
              </Tooltip>
            </Stack>

            <Box sx={{ width: '100%'}}>
              <DataTable
                search={false}
                data={data}
                toolbar={false}
              />
            </Box>

          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default memo(Page);
