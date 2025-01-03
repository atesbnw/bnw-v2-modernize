"use client";
import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {Stack, Button, Grid, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, DialogActions} from "@mui/material";
import ParentCard from "@/app/components/shared/ParentCard";
import DataTable from "@/app/components/shared/DataTable";
import FilterModal from "@/app/(default)/components/tools/bonuses/FilterModal";
import {uniqueId} from "lodash";
import {Faker, fakerTR, tr} from "@faker-js/faker";
import {useParams, useRouter} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import {IconEye, IconTrash, IconPencil as IconEdit} from "@tabler/icons-react";
import BonusDetail from "@/app/(default)/components/tools/bonuses/BonusDetail";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';
import BonusActionModal from '@/app/(default)/components/tools/bonuses/BonusActionModal/BonusActionModal';
import classNames from 'classnames';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {

  const [tab, setTab] = useState(0);
  const [filter, setFilter] = useState({});
  const router = useRouter();

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
          {/* <Button variant='contained' color='primary' onClick={() => router.push(`/tools/create-free-bet/`)}>{t('pages.tools.bonus.Create Free Bet')}</Button> */}

          <BonusActionModal isCreateButton={true}>{t('pages.tools.bonus.Create Bonus')}</BonusActionModal>
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


  const columnsTab0 = [
    {
      field: 'bonusId',
      headerName: t('pages.tools.bonus.Bonus ID'),
    },
    {
      field: 'bonusName',
      headerName: t('pages.tools.bonus.Bonus Name'),
      flex: 1,
    },
    {
      field: 'bonusType',
      headerName: t('pages.tools.bonus.Bonus Type'),
    },
    {
      field: 'bonusCategory',
      headerName: t('pages.tools.bonus.Bonus Category'),
    },
    {
      field: 'gameCategory',
      headerName: t('pages.tools.bonus.Game Category'),
    },
    {
      field: 'startDate',
      headerName: t('pages.tools.bonus.Start Date'),
    },
    {
      field: 'finishDate',
      headerName: t('pages.tools.bonus.Finish Date'),
    },
    {
      field: 'operator',
      headerName: t('pages.tools.bonus.Operator'),
    },
    {
      field: 'status',
      headerName: t('pages.tools.bonus.Status')
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
            <BonusActionModal id={e?.id} initialValues={e?.row} readOnly={true}/>
            <BonusActionModal id={e?.id} initialValues={e?.row} readOnly={false}/>
          </>,
        ]
      },
    },
  ]


  const columnsTab1 = [
    {
      field: 'bonusId',
      headerName: t('pages.tools.bonus.Bonus ID'), // "BONUS ID"
    },
    {
      field: 'bonusName',
      headerName: t('pages.tools.bonus.Bonus Name'), // "BONUS ADI"
      flex: 1,
    },
    {
      field: 'gameCategory',
      headerName: t('pages.tools.bonus.Game Category'), // "OYUN KATEGORİSİ"
    },
    {
      field: 'startDate',
      headerName: t('pages.tools.bonus.Start Date'), // "BAŞLANGIÇ ZAMANI"
    },
    {
      field: 'finishDate',
      headerName: t('pages.tools.bonus.Finish Date'), // "BİTİŞ ZAMANI"
    },
    {
      field: 'wager',
      headerName: t('pages.tools.bonus.Wager'), // "ÇEVRİM"
    },
    {
      field: 'bonusAmount',
      headerName: t('pages.tools.bonus.Bonus Amount'), // "BONUS TUTARI"
    },
    {
      field: 'targetUser',
      headerName: t('pages.tools.bonus.targetUser'), // "HEDEF KULLANICI"
    },
    {
      field: 'operator',
      headerName: t('pages.tools.bonus.Operator'), // "OPERATÖR"
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
            <BonusActionModal id={e?.id} initialValues={e?.row} readOnly={true}/>
            <BonusActionModal id={e?.id} initialValues={e?.row} readOnly={false}/>
          </>,
        ]
      },
    },
  ]

  // Tab 0 için sahte satırlar
  const generateRowsTab0 = () => {
    return Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      bonusId: uniqueId(),
      bonusName: faker.helpers.arrayElement(['%20 Hoş Geldin Bonusu', 'Pragmatic FreeSpin', '%15 Çevrimli Bonus']),
      bonusType: faker.helpers.arrayElement(['Deposit', 'Freespin', 'FreeBet']),
      bonusCategory: faker.helpers.arrayElement(['Option A', 'Option B']),
      gameCategory: faker.helpers.arrayElement([
        'Casino',
        'Live Casino, Casino, Virtual Games',
        'Live Casino',
      ]),
      startDate: faker.date
        .recent()
        .toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      finishDate: faker.date
        .recent()
        .toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      operator: 'eren_bonus',
      wager: faker.helpers.arrayElement(['Çevrimli', 'Çevrimsiz', 'Koşulsuz']),
      targetUser: faker.helpers.arrayElement(['VIP', 'Yeni Üye', 'Sadık Üye']),
      ipCheck: faker.helpers.arrayElement(['Active', 'Passive']),
      status: faker.helpers.arrayElement(['Active', 'Passive']),
    }))
  }


  const generateRowsTab1 = () => {
    return Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      bonusId: uniqueId(),
      bonusName: faker.helpers.arrayElement([
        'JEST BONUSU',
        'VIP BONUSU',
        'KAYIP BONUSU',
        'İADE BONUSU',
      ]),
      gameCategory: faker.helpers.arrayElement([
        'Casino',
        'Live Casino, Casino, Virtual Games',
        'Live Casino',
      ]),
      startDate: faker.date.recent().toLocaleString('tr-TR', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
      finishDate: faker.date.recent().toLocaleString('tr-TR', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
      bonusAmount: faker.helpers.arrayElement(['100₺', '200₺', '500₺']),
      wager: faker.helpers.arrayElement(['Çevrimli', 'Çevrimsiz', 'Koşulsuz']),
      targetUser: faker.helpers.arrayElement(['VIP', 'Yeni Üye', 'Sadık Üye']),
      ipCheck: faker.helpers.arrayElement(['Active', 'Passive']),
      operator: 'eren_bonus',
    }))
  }

  useEffect(() => {
    if (tab === 0) {
      const rowsTab0 = generateRowsTab0()
      setData((prev) => ({
        ...prev,
        columns: columnsTab0,
        rows: rowsTab0,
        pageSize: rowsTab0.length,
        totalPage: Math.floor(rowsTab0.length / (rowsTab0.length || 1)),
      }))
    } else if (tab === 1) {
      const rowsTab1 = generateRowsTab1()
      setData((prev) => ({
        ...prev,
        columns: columnsTab1,
        rows: rowsTab1,
        pageSize: rowsTab1.length,
        totalPage: Math.floor(rowsTab1.length / (rowsTab1.length || 1)),
      }))
    }
  }, [tab])

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
            title={t('Tools.Bonuses')}
            Right={ButtonComps}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>


          <Box justifyContent={'start'} display="flex" sx={{ flexDirection: "column", maxWidth: { xs: 320, sm: '100%' } }}>
            <Tabs
              value={tab}
              onChange={(e,a) => setTab(a)}
              variant="scrollable"
              allowScrollButtonsMobile
              aria-label="scrollable prevent tabs example"
            >
              {["pages.tools.bonus.CreatedBonuses", "pages.tools.bonus.transferredBonuses"].map((tab,_) => {
                return (
                  <Tab
                    iconPosition="start"
                    label={t(tab)}
                    sx={{ minHeight: '50px' }}
                    value={_}
                    key={tab}
                  />
                );
              })}
            </Tabs>

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

            {Array.from(Array(2)).map((_, index) => (
              <CustomTabPanel value={tab} index={index}>
                <Grid container spacing={1}>


                    <DataTable
                      withSideMenu={false}
                      search={false}
                      data={data}
                      toolbar={false}
                    />
                </Grid>
              </CustomTabPanel>
            ))}


            </ParentCard>
          </Box>



        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
