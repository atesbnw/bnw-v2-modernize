"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import FilterModal from '@/app/(default)/components/settings/providers/FilterModal';
import ActionModal from "@/app/(default)/components/settings/providers/ActionModal";

function Page() {
  const title = t("Settings.Providers");
  const router = useRouter();
  const [filter, setFilter] = useState({});

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
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
        field: 'providerLogo',
        headerName: '',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll',
        width: 100,
      },
      {
        field: 'providerId',
        headerName: t('pages.settings.commission-percents.Provider ID'),
        flex: 1,
      },
      {
        field: 'providerName',
        headerName: t('pages.settings.commission-percents.Provider Name'),
        flex: 1,
      },
      {
        field: 'category',
        headerName: t('pages.settings.commission-percents.Category'),
        flex: 1,
      },
      {
        field: 'commissionRate',
        headerName: t('pages.settings.commission-percents.Commission Rate'),
        flex: 1,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 70,
        getActions: (e) => {
          return [
            <ActionModal
              data={e?.row}
              id={e?.id}
            />
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      providerId: uniqueId(),
      providerLogo: faker.helpers.arrayElement(['https://www.paulbellard.com/wp-content/uploads/2020/03/evolution-gaming-logo.jpg']),
      providerName: faker.helpers.arrayElement(['EGT', 'Pragmatic Play', 'Netent', "Evolution"]),
      category: faker.helpers.arrayElement(['Casino', 'Live Casino']),
      commissionRate: faker.commerce.price(0, 100, 2) + '%',
    }));

    setData((prev) => ({
      ...prev,
      columns: columns,
      rows: rows,
      pageSize: rows?.length,
      totalPage: Math.floor(data?.pageSize / (rows?.length || 1)),
    }));
  }, []);

  return (
    <Box className={"flex flex-col gap-4"}>
      <TitleBar
        title={title}
      />

      <ParentCard title={""} action={(
        <FilterModal
          filter={filter}
          updateFilter={updateFilter}
          resetFilter={() => {
            setFilter({});
            setData(prev => ({ ...prev, filter: {} }));
          }}
          onConfirm={() => setData(prev => ({ ...prev, filter: filter }))}
        />
      )}>
        <DataTable
          search={false}
          data={data}
          toolbar={false}
        />
      </ParentCard>
    </Box>
  );
}

export default memo(Page);