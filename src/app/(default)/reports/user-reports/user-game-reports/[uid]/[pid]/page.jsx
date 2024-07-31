"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/user-reports/user-game-reports/sub/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons-react';
import ParentCard from '@/app/components/shared/ParentCard';

function Page() {
  const params = useParams();
  const title = t("Reports.User Game Reports");
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = [
    { title: t('pages.merchants.reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.reports.user-reports.providerCount'), value: faker.datatype.number({ min: 100, max: 400 }).toString()},
    { title: t('pages.reports.user-reports.totalUser'), value: faker.datatype.number({ min: 100, max: 400 }).toString()},
  ];
  const router = useRouter();
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
        field: 'logo',
        headerName: '',
        renderCell: (params) => <img src={params.value} width={70} height="auto" />,
        cellClassName: 'centerAll'
        // width: 200
      },
      {
        field: 'gameName',
        headerName: t('pages.reports.user-reports.gameName'),
        flex: 1,
      },
      {
        field: 'play',
        headerName: t('pages.reports.user-reports.play'),
        // width: 200
      },
      {
        field: 'won',
        headerName: t('pages.reports.user-reports.won'),
        // width: 200
      },
      {
        field: 'diff',
        headerName: t('pages.reports.user-reports.diff'),
        // width: 200
      },
      {
        field: 'cancel',
        headerName: t('pages.reports.user-reports.cancel'),
        // width: 200
      },
      {
        field: 'refund',
        headerName: t('pages.reports.user-reports.refund'),
        // width: 200
      },
      {
        field: 'payback',
        headerName: t('pages.reports.user-reports.payback'),
        // width: 200
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      logo: faker.helpers.arrayElement(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0mnLg3qFsLZPtHPzOVPt-tISk_9CyCkIqQ&s','https://images-platform.99static.com//0VlTLrmx9f4e-1F5nvt7ZLf3Axw=/162x147:831x816/fit-in/500x500/99designs-contests-attachments/123/123983/attachment_123983096','https://static.vecteezy.com/system/resources/previews/005/562/562/non_2x/casino-logo-banner-with-golden-crown-and-treasure-royal-gambling-background-with-precious-stones-game-card-symbols-vector.jpg']),
      gameName: faker.helpers.arrayElement(['Flaming Hot', '40 Burning Hot', '20 Dazzling Hot']),
      // userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      // category: faker.helpers.arrayElement(['Casino', 'Live Casino', 'Virtual Games']),
      play: faker.commerce.price(1000, 100000, 2) + "₺",
      won: faker.commerce.price(1000, 100000, 2) + "₺",
      diff: faker.commerce.price(1000, 100000, 2) + "₺",
      cancel: faker.commerce.price(1000, 100000, 2) + "₺",
      refund: faker.commerce.price(1000, 100000, 2) + "₺",
      payback: faker.commerce.price(1000, 100000, 2) + "₺",
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
        link={"../user-game-reports"}
        subTitle={[
          { title: decodeURIComponent(params?.uid), link: `../${params?.uid}`},
          decodeURIComponent(params?.pid)
        ]}
      />

        <SummaryBar
          title={t('pages.merchants.reports.Total')}
          data={totalResultsData}
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
