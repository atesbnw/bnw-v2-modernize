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
import FilterModal from '@/app/(default)/components/settings/payment-methods/FilterModal';
import ActionModal from "@/app/(default)/components/settings/payment-methods/ActionModal";

function Page() {
  const title = t("Settings.Payment Methods");
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
        field: 'methodLogo',
        headerName: '',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll',
        width: 100,
      },
      {
        field: 'methodId',
        headerName: t('pages.settings.commission-percents.Method ID'),
        flex: 1,
      },
      {
        field: 'methodName',
        headerName: t('pages.settings.commission-percents.Method Name'),
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
      methodId: uniqueId(),
      methodLogo: faker.helpers.arrayElement(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_rlWDp4NbQb1PYTzGBfJYkFKY7njllV1DQ&s']),
      methodName: faker.helpers.arrayElement(['Papara Key', 'Safe Havale', 'Jet Papara', "Kripto Pay"]),
      category: faker.helpers.arrayElement(['Papara', 'Havale']),
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