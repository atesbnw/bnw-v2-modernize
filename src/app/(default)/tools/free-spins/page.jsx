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
import FreeSpinActionModal from '@/app/(default)/components/tools/free-spin/FreeSpinActionModal/FreeSpinActionModal';
import classNames from 'classnames';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const [filter, setFilter] = useState({});
  const router = useRouter();

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
        <FreeSpinActionModal isCreateButton={true}>{t('pages.tools.bonus.Create Free Spin')}</FreeSpinActionModal>

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
        field: 'freeSpinId',
        headerName: t('pages.tools.bonus.FreeSpin ID'),
        width: 100,
      },
      {
        field: 'freeSpinName',
        headerName: t('pages.tools.bonus.FreeSpin Name'),
        flex: 1,
      },
      {
        field: 'provider',
        headerName: t('pages.tools.bonus.Provider'),
        width: 150,
      },
      {
        field: 'game',
        headerName: t('pages.tools.bonus.Game'),
        flex: 1,
      },
      {
        field: 'fsCount',
        headerName: t('pages.tools.bonus.FS Count'),
        width: 100,
      },
      {
        field: 'betPerSpin',
        headerName: t('pages.tools.bonus.Bet Per Spin'),
        width: 120,
      },
      {
        field: 'startTime',
        headerName: t('pages.tools.bonus.Start Time'),
        width: 180,
      },
      {
        field: 'endTime',
        headerName: t('pages.tools.bonus.End Time'),
        width: 180,
      },
      {
        field: 'targetUser',
        headerName: t('pages.tools.bonus.Target User'),
        width: 150,
      },
      {
        field: 'operator',
        headerName: t('pages.tools.bonus.Operator'),
        width: 150,
      },
      {
        field: 'status',
        headerName: t('pages.tools.bonus.Status'),
        width: 100,
        renderCell: (params) => {
          const status = params.value;
          const statusColors = {
            Active: 'green',
            Pending: 'amber',
            Passive: 'rose',
            gray: "grey"
          };
          const color = statusColors[status] || 'gray';

          return (
            <div
              className={`rounded-full p-3 opacity-75 mx-auto bg-${color}-500`}
            />
          );
        },
      },
      {
        field: 'actions',
        headerName: "",
        type: 'actions',
        width: 150,
        renderCell: (e) => {
          return (
            <>
              <IconButton onClick={() => alert('Silindi!')} disabled={e?.row?.status==="Active"} >
                <IconTrash />
              </IconButton>
              <FreeSpinActionModal id={e?.id} initialValues={e?.row} readOnly={true}/>
              <FreeSpinActionModal id={e?.id} initialValues={e?.row} readOnly={false} disabled={e?.row?.status==="Active"} />
            </>
          );
        },
      },
    ];

    const rows = Array.from({ length: 20 }).map(() => ({
      id: faker.datatype.uuid(),
      freeSpinId: faker.datatype.number({ min: 1, max: 10000 }).toString().padStart(5, '0'),
      freeSpinName: faker.helpers.arrayElement(['Pragmatic Freespin Yağmuru', 'Hoş Geldin Bonusu', '%15 Bonus']),
      provider: faker.helpers.arrayElement(['Pragmatic', 'NetEnt', 'Evolution']),
      game: faker.helpers.arrayElement([
        'Gates of Olympus, Sweet Bonanza, Sugar Rush',
        'Book of Dead, Starburst, Gonzo\'s Quest',
      ]),
      fsCount: faker.datatype.number({ min: 10, max: 50 }),
      betPerSpin: `${faker.finance.amount(1, 10, 2)} ₺`,
      startTime: faker.date
        .recent(7)
        .toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      endTime: faker.date
        .soon(7)
        .toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      targetUser: faker.helpers.arrayElement(['VIP', 'Yeni Üye', 'Sadık Üye']),
      operator: faker.helpers.arrayElement(['eren_bonus', 'admin', 'operator']),
      status: faker.helpers.arrayElement(['Active', 'Pending', 'Passive']),
    }));

    setData({
      columns,
      rows,
      pageSize: rows.length,
      totalPage: Math.ceil(rows.length / 10),
    });

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
