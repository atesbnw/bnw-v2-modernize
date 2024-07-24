import React, { memo, useState, useCallback, useEffect } from 'react';
import { t } from 'i18next';
import { faker } from '@faker-js/faker';
import { useParams, useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconEye } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import TitleBar from '@/app/components/TitleBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/user-reports/user-game-reports/sub/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import DataTable from '@/app/components/shared/DataTable';

function CasinoTab() {
  const params = useParams();
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
    { title: t('pages.merchants.reports.Take Back'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
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
        field: 'provider',
        headerName: t('pages.reports.user-reports.provider'),
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
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <IconButton onClick={() => router.push(`/reports/user-reports/user-game-reports/${params?.uid}/${e.row?.provider}`)}>
              <IconEye />
            </IconButton>,
            // <IconButton onClick={() => router.push(`/users/${e?.row?.username}`)}>
            //   <IconPencil />
            // </IconButton>
          ]
        }
      }
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      logo: faker.helpers.arrayElement(['https://getlogovector.com/wp-content/uploads/2021/11/evolution-gaming-logo-vector.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mgeXFwmA1yjsB9IxQ33OMU0KeebpnvFZYA&s','https://seeklogo.com/images/P/pragmatic-play-logo-C41E3B3527-seeklogo.com.png','https://liongaming.io/wp-content/uploads/2024/04/BoomingGames.webp']),
      provider: faker.helpers.arrayElement(["EGT", 'Nentent', 'Evolution', "Pragmatic Play", "Booming Games"]),
      // userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
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

      <Stack direction={"row"} justifyContent={"end"} className={"mb-3 items-center"}>

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

      <SummaryBar
        title={t('pages.merchants.reports.Total')}
        data={totalResultsData}
      />


      <DataTable
        search={false}
        data={data}
        toolbar={false}
      />
    </Box>
  );
}

export default memo(CasinoTab);
