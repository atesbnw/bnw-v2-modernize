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
import FilterModal from "@/app/(default)/components/users/reports/bet-reports/FilterModal";
import {useParams, useRouter} from "next/navigation";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);


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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Reports Menu.Bet Reports')}
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
            <TotalResults title={t('pages.user-management.user_management_reports.Total')} data={totalResultsData}/>
          </Card>
        </Grid>

      </Grid>

    </Fragment>
  );
}

export default memo(Page);
