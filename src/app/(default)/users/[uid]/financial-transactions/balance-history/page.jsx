'use client';
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import TitleBar from '@/app/components/TitleBar';
import TransactionsTable from '@/app/(default)/components/users/financial-transactions/BalanceHistoryTable';
import ParentCard from "@/app/components/shared/ParentCard";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {IconFileDownload} from "@tabler/icons-react";
import FilterModal from "@/app/(default)/components/users/financial-transactions/FilterModal";

function Page() {
  const params = useParams();
  const pathname = usePathname();
  const [filter, setFilter] = useState({});

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={t('menu.Financial Transactions.Balance History')}
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
        <TransactionsTable type={"balance"} />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);
