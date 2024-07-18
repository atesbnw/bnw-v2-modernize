"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from '@/app/components/TitleBar';
import {Box, Button, InputAdornment, Link, MenuItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import DataTable from "@/app/components/shared/DataTable";
import Stack from "@mui/material/Stack";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import Filter from "@/app/(default)/components/users/reports/Filter";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import { useBonus } from '@/app/(default)/users/[uid]/reports/bonus-reports/useBonus.js';
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const {bonusReports} = useBonus();

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
            title={t('menu.Users.Reports Menu.Bonus Reports')}
          />
        </Grid>
        <Grid item xs={12} className={"pt-0"}>
          <Card variant="outlined">
            <Filter>
              <Grid container spacing={2} >
                <Grid item xs={12} md={1}>
                  <CustomFormLabel
                    htmlFor="id">{t('pages.user-management.user_management_reports.ID')}</CustomFormLabel>
                  <CustomOutlinedInput
                    id="id"
                    name="id"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormLabel
                    htmlFor="id">{t('pages.user-management.user_management_reports.Amount')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="Amount"
                    name="Amount"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  <CustomFormLabel
                    htmlFor="bonusType">{t('pages.user-management.user_management_reports.Bonus Type')}</CustomFormLabel>
                  <CustomSelect
                    id="bonusType"
                    name="bonusType"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="papara">Option</MenuItem>
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} md={1}>
                  <CustomFormLabel
                    htmlFor="status">{t('pages.user-management.user_management_reports.Status')}</CustomFormLabel>
                  <CustomSelect
                    id="status"
                    name="status"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="papara">Option</MenuItem>
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} md={1}>
                  <CustomFormLabel
                    htmlFor="result">{t('pages.user-management.user_management_reports.Result')}</CustomFormLabel>
                  <CustomSelect
                    id="result"
                    name="result"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="papara">Option</MenuItem>
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} md={1}>
                  <CustomFormLabel
                    htmlFor="operator">{t('pages.user-management.user_management_reports.Operator')}</CustomFormLabel>
                  <CustomSelect
                    id="operator"
                    name="operator"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="papara">Option</MenuItem>
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} md={2}>
                  <CustomFormLabel
                    htmlFor="operator">{t('pages.user-management.user_management_reports.sameDayTransactions')}</CustomFormLabel>
                  <FormControlLabel control={<CustomSwitch />} />
                </Grid>
              </Grid>
            </Filter>
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
                data={bonusReports}
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
