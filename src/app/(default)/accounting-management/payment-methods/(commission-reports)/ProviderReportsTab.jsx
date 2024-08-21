import React, { memo, useState, useMemo, useEffect } from 'react';
import { t } from 'i18next';
import { faker } from '@faker-js/faker';
import { useParams, useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { IconChevronRight, IconFileDownload } from '@tabler/icons-react';
import { uniqueId } from 'lodash';
import Box from '@mui/material/Box';
import TitleBar from '@/app/components/TitleBar';
import TimeTabs from '@/app/components/shared/TimeTabs';
import Stack from '@mui/material/Stack';
import FilterModal from '@/app/(default)/components/reports/user-reports/user-game-reports/sub/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tooltip from '@mui/material/Tooltip';
import { FormControlLabel } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';

function ProviderReportsTab({filter, updateFilter = () => {}}) {
  const params = useParams();

  const totalResultsData = useMemo(() =>  [
    { title: t('pages.merchants.reports.Played'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Won'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Difference'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Canceled'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Rollback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.merchants.reports.Payback'), value: faker.commerce.price(1000, 100000, 2) + '₺'},
    { title: t('pages.reports.user-reports.providerCount'), value: faker.datatype.number({ min: 100, max: 400 }).toString()},
    { title: t('pages.reports.user-reports.totalUser'), value: faker.datatype.number({ min: 100, max: 400 }).toString()},
  ], []);
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
        field: 'commissionPercent',
        headerName: t('pages.reports.user-reports.commissionPercent'),
        // width: 200
      },
      {
        field: 'commissionTotal',
        headerName: t('pages.reports.user-reports.commissionTotal'),
        // width: 200
      },
      {
        field: 'actions',
        type: 'actions',
        width: 170,
        getActions: (e) => {
          return [
            <IconButton onClick={() => router.push(`/reports/user-reports/user-game-reports/${params?.uid}/${e.row?.provider}`)}>
              <IconChevronRight />
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
      provider: faker.helpers.arrayElement(["EGT", 'Nentent', 'Evolution', "Pragmatic Play", "Booming Games"]),
      // userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      play: faker.commerce.price(1000, 100000, 2) + "₺",
      won: faker.commerce.price(1000, 100000, 2) + "₺",
      diff: faker.commerce.price(1000, 100000, 2) + "₺",
      cancel: faker.commerce.price(1000, 100000, 2) + "₺",
      refund: faker.commerce.price(1000, 100000, 2) + "₺",
      payback: faker.commerce.price(1000, 100000, 2) + "₺",
      commissionPercent: "%" + faker.datatype.number({ min: 0, max: 100 }).toString(),
      commissionTotal: faker.commerce.price(1000, 10000, 2) + "₺",
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

      <SummaryBar
        title={t('pages.merchants.reports.Total')}
        data={totalResultsData}
      />

      <Box>
        <FormControlLabel
          control={<CustomCheckbox />}
          label={t('pages.reports.user-reports.casino')}
          checked={filter?.casino}
          onChange={(e, checked) => updateFilter("casino", checked)}
        />
        <FormControlLabel
          control={<CustomCheckbox />}
          label={t('pages.reports.user-reports.liveCasino')}
          checked={filter?.liveCasino}
          onChange={(e, checked) => updateFilter("liveCasino", checked)}
        />
        <FormControlLabel
          control={<CustomCheckbox />}
          label={t('pages.reports.user-reports.virtualGames')}
          checked={filter?.virtualGames}
          onChange={(e, checked) => updateFilter("virtualGames", checked)}
        />
        <FormControlLabel
          control={<CustomCheckbox />}
          label={t('pages.reports.user-reports.sports')}
          checked={filter?.sports}
          onChange={(e, checked) => updateFilter("sports", checked)}
        />
      </Box>

      <DataTable
        search={false}
        data={data}
        toolbar={false}
      />

    </Box>
  );
}

export default memo(ProviderReportsTab);
