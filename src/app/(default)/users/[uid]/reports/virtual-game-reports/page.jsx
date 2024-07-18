"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from '@/app/components/TitleBar';
import {Box, Button, InputAdornment, Link} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import Stack from "@mui/material/Stack";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import TotalResults from "@/app/(default)/components/users/reports/TotalResults";
import Filter from "@/app/(default)/components/users/reports/Filter";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import { useVirtualGames } from '@/app/(default)/users/[uid]/reports/virtual-game-reports/useVirtualGames';

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const {virtualGamesReports} = useVirtualGames();

  const totalResultsData = [
    { title: t('pages.user-management.user_management_reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Take Back'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
  ];

  return (
    <Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            title={t('menu.Users.Reports Menu.Virtual Game Reports')}
          />
        </Grid>
        <Grid item xs={12} className={"pt-0"}>
          <Card variant="outlined">
            <Filter>
              <Grid container spacing={2} >
                <Grid item xs={12} md={3}>
                  <CustomFormLabel
                    htmlFor="searchText">{t('pages.user-management.user_management_reports.Search')}</CustomFormLabel>
                  <CustomTextField
                    id="searchText"
                    name="searchText"
                    placeholder={t('pages.user-management.user_management_reports.Provider Name')}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormLabel
                    htmlFor="minPlayed">{t('pages.user-management.user_management_reports.Min. Played')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minPlayed"
                    name="minPlayed"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormLabel
                    htmlFor="maxPlayed">{t('pages.user-management.user_management_reports.Max. Played')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minPlayed"
                    name="minPlayed"
                    type="number"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Filter>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <TotalResults title={t('pages.user-management.user_management_reports.Total')} data={totalResultsData}/>
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
                data={virtualGamesReports}
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
