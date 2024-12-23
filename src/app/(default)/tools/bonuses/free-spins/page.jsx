"use client";
import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {Stack, Button, Grid, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, DialogActions} from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import DataTable from "@/app/components/shared/DataTable";
import FilterModal from "@/app/(default)/components/tools/bonuses/FreeSpinFilterModal";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import {useParams, useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {IconEye, IconTrash} from "@tabler/icons-react";
import BonusDetail from "@/app/(default)/components/tools/bonuses/BonusDetail";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const [filter, setFilter] = useState({});
  const router = useRouter();

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
          {/* <Button variant='contained' color='primary' onClick={() => router.push(`/tools/create-free-bet/`)}>{t('pages.tools.bonus.Create Free Bet')}</Button> */}
          <Button variant='contained' color='primary' onClick={() => router.push(`/tools/bonuses/create-free-spin/`)}>{t('pages.tools.bonus.Create Free Spin')}</Button>

      </Stack>
    );
  }, []);

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
        field: 'bonusId',
        headerName: t('pages.tools.bonus.Bonus ID'),
        // width: 200
      },
      {
        field: 'bonusName',
        headerName: t('pages.tools.bonus.Bonus Name'),
        // width: 200
        flex: 1,
      },
      {
        field: 'bonusType',
        headerName: t('pages.tools.bonus.Bonus Type'),
        // width: 200,
      },
      {
        field: 'bonusCategory',
        headerName: t('pages.tools.bonus.Bonus Category'),
        // width: 200
      },
      {
        field: 'gameCategory',
        headerName: t('pages.tools.bonus.Game Category'),
        // width: 200
      },
      {
        field: 'startDate',
        headerName: t('pages.tools.bonus.Start Date'),
        // width: 200
      },
      {
        field: 'finishDate',
        headerName: t('pages.tools.bonus.Finish Date'),
        // width: 200
      },
      {
        field: 'operator',
        headerName: t('pages.tools.bonus.Operator'),
        // width: 200
      },
      {
        field: 'status',
        headerName: t('pages.tools.bonus.Status'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <>
              <IconButton>
                <IconTrash />
              </IconButton>
              <IconButton >
                <BonusDetail />
              </IconButton>
            </>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      bonusId: uniqueId(),
      bonusName: faker.helpers.arrayElement(['%20 Hoş Geldin Bonusu', 'Pragmatic FreeSpin', '%15 Çevrimli Bonus']),
      bonusType: faker.helpers.arrayElement(['Deposit', 'Freespin', 'FreeBet']),
      bonusCategory: faker.helpers.arrayElement(['Option A', 'Option B']),
      gameCategory: faker.helpers.arrayElement(['Casino', 'Live Casino & Casino & Virtual Games', 'Live Casino']),
      startDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      finishDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      operator: "eren_bonus",
      status: faker.helpers.arrayElement(['Active', 'Passive']),
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
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            title={t('pages.tools.bonus.FreeSpins')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title=''
            action={
              <FilterModal
                filter={filter}
                updateFilter={updateFilter}
                resetFilter={() => {
                  setFilter({});
                  setData(prev => ({ ...prev, filter: {} }));
                }}
                onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
              />
            }
           >

            <DataTable
              withSideMenu={false}
              search={false}
              data={data}
              toolbar={false}
            />

          </ParentCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
