"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import { Faker, tr, fakerTR } from '@faker-js/faker';
import FilterModal from "@/app/(default)/components/users/reports/bet-reports/FilterModal";
import {useParams, useRouter} from "next/navigation";
import ParentCard from "@/app/components/shared/ParentCard";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload} from "@tabler/icons-react";
import SummaryBar from "@/app/(default)/components/reports/SummaryBar";
import {Box} from "@mui/material";

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
    { title: t('pages.user-management.user_management_reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.user-management.user_management_reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'}
  ];

  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Users.Reports Menu.Bet Reports')}
      />
      <ParentCard title={""} action={(
        <>
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
        </>
      )}>
        <SummaryBar
          title={t('pages.merchants.reports.Total')}
          data={totalResultsData}
        />
      </ParentCard>
    </Box>

  );
}

export default memo(Page);
