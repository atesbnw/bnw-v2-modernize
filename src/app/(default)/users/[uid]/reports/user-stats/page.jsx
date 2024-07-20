"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TitleBar from '@/app/components/TitleBar';
import IconButton from "@mui/material/IconButton";
import {IconFileDownload, IconEye, IconUser} from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import {useParams, useRouter} from "next/navigation";
import FilterModal from "@/app/(default)/components/users/reports/user-stats/FilterModal";
import ReportInfoCard from "@/app/components/shared/ReportInfoCard";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const params = useParams();
  const router = useRouter();
  const [filter, setFilter] = useState({});

  const iconProps = {
    size: 38,
    color: "white",
    stroke: 1
  };

  const data = [
    { title: "Last Sport Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Live Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Sport Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Live Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Total Sport Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Sport Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Sport Profit", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Casino Profit", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Profit", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Investment Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Withdrawal Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Bonus Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Last Investment Date", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Withdrawal Date", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Bonus Date", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}}
  ];

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Reports Menu.User Stats')}
            />

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
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">

            <Stack spacing={2}>
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ReportInfoCard title={item.title} value={item.value} icon={item.icon} info={item?.info} />
                  </Grid>
                ))}
              </Grid>
            </Stack>

          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );
}

export default memo(Page);
