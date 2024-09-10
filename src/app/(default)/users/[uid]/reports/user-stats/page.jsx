"use client";
import React, {memo, useState, useCallback, useMemo, Fragment, useEffect} from 'react';
import { t } from 'i18next';
import TitleBar from '@/app/components/TitleBar';
import {IconFileDownload, IconEye, IconUser} from "@tabler/icons-react";
import { Faker, tr, fakerTR } from '@faker-js/faker';
import FilterModal from "@/app/(default)/components/users/reports/user-stats/FilterModal";
import ReportInfoCard from "@/app/components/shared/ReportInfoCard";
import ParentCard from "@/app/components/shared/ParentCard";
import {Box} from "@mui/material";

const faker = new Faker({
  locale: [fakerTR, tr],
});

function Page() {
  const [filter, setFilter] = useState({});

  const iconProps = {
    size: 38,
    color: "white",
    stroke: 1
  };

  const data = [
    { title: "Last Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Live Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Last Live Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
    { title: "Total Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Bet", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Bonus", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Casino Profit", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Live Casino Profit", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Profit Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Withdrawal Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Total Bonus Amount", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />},
    { title: "Last Profit Date", value: "4,100.18 ₺", icon: <IconUser {...iconProps} />, info: {transactionTime:"18.05.2024 22:18:33", user:"goremaster"}},
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
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Users.Reports Menu.User Stats')}
      />
      <ParentCard title={""} action={(
        <>
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
        <Box className={"grid grid-cols-3 gap-3"}>
          {data.map((item, index) => (
            <Box key={index}>
              <ReportInfoCard title={item.title} value={item.value} icon={item.icon} info={item?.info} />
            </Box>
          ))}
        </Box>
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
