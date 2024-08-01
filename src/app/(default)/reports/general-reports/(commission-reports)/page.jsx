'use client';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import FilterModal from '@/app/(default)/components/reports/general-reports/commission-reports/FilterModal';
import SummaryBar from '@/app/(default)/components/reports/SummaryBar';
import { useParams, useRouter } from 'next/navigation';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import DataTable from '@/app/components/shared/DataTable';
import ParentCard from '@/app/components/shared/ParentCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProviderReportsTab from '@/app/(default)/reports/general-reports/(commission-reports)/ProviderReportsTab';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import { FormControlLabel, MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { IconFileDownload } from '@tabler/icons-react';
import Tooltip from '@mui/material/Tooltip';

function Page() {
  const params = useParams();
  const [tab, setTab] = useState(0);

  const title = t('Reports.Commission Reports');
  const [filter, setFilter] = useState({});
  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const totalResultsData = useMemo(() => [
    { title: t('pages.reports.user-reports.depositWithdraw'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.providerCommission'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.financeCommission'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
    { title: t('pages.reports.user-reports.netProfit'), value: faker.commerce.price(24000, 100000, 2) + '₺' },
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
        field: 'transactionId',
        headerName: t('pages.reports.user-reports.transactionId'),
        // width: 200
      },
      {
        field: 'username',
        headerName: t('pages.reports.user-reports.username'),
        // width: 200,
        // width: 200
      },
      {
        field: 'userId',
        headerName: t('pages.reports.user-reports.userId'),
        // width: 200,
        // width: 200
      },
      {
        field: 'transactionDate',
        headerName: t('pages.reports.user-reports.transactionDate'),
        width: 200,
      },
      {
        field: 'ip',
        headerName: t('pages.reports.user-reports.ip'),
        flex: 1,
      },
      {
        field: 'transaction',
        headerName: t('pages.reports.user-reports.transaction'),
        // width: 200
      },
      {
        field: 'category',
        headerName: t('pages.reports.user-reports.category'),
        // width: 200,
        // width: 200
      },
      {
        field: 'sub_category',
        headerName: t('pages.reports.user-reports.sub_category'),
        // width: 200,
        // width: 200
      },
      {
        field: 'amount',
        headerName: t('pages.reports.user-reports.amount'),
        // width: 200,
        // width: 200
      },
    ];

    const rows = Array.from(Array(20)).map(() => ({
      id: uniqueId(),
      transactionId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      username: faker.internet.userName(),
      userId: faker.datatype.number({ min: 1000000, max: 9999999 }).toString(),
      transactionDate: faker.date.recent().toLocaleString('tr-TR', { dateStyle: 'short', timeStyle: 'short' }),
      ip: faker.internet.ipv4(),
      transaction: faker.helpers.arrayElement(['Deposit', 'Withdraw']),
      category: faker.helpers.arrayElement(['Papara', 'Payfix']),
      sub_category: faker.helpers.arrayElement(['Papara Key', 'Papara XYZ']),
      amount: faker.datatype.number({ min: 1000000, max: 9999999 }).toString() + '.00 ₺',
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
    <Box className={'flex flex-col gap-4'}>
      <TitleBar
        title={title}
      />
      <ParentCard title={''} action={(
        <Stack direction={'row'}>
          <Tooltip title={t('pages.user-management.user_management_financial_transactions.downloadCSV')}>
            <IconButton color={'primary'} onClick={() => {
            }}>
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
      )}>
        <SummaryBar
          title={t('pages.merchants.reports.Total')}
          data={totalResultsData}
        />

        <Card variant={'outlined'}>
          <Stack direction="row" spacing={2} justifyContent="space-between" alignItems={'end'}>
            <Stack direction="row" spacing={2}>
              <Box>
                <CustomFormLabel sx={{m:0}} htmlFor="currency">{t('pages.reports.user-reports.currency')}</CustomFormLabel>
                <CustomSelect
                  id="currency"
                  name="currency"
                  fullWidth
                  variant="outlined"
                  value={filter?.currency || 'TRY'}
                  onChange={(e) => updateFilter('currency', e?.target.value)}
                >
                  <MenuItem value="TRY">TRY</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </CustomSelect>
              </Box>
              <Box>
                <CustomFormLabel sx={{m:0}} htmlFor="exchange">{t('pages.reports.user-reports.exchange')}</CustomFormLabel>
                <CustomSelect
                  id="exchange"
                  name="exchange"
                  fullWidth
                  variant="outlined"
                  value={filter?.exchange || 'USD'}
                  onChange={(e) => updateFilter('exchange', e?.target.value)}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EURO">EURO</MenuItem>
                </CustomSelect>
              </Box>
            </Stack>

            <Box>
              <Typography variant={'body2'}>{t('pages.reports.user-reports.parity')}</Typography>
              <Typography>1 {filter?.currency || 'USD'} = {filter?.currency === 'USD' ? 32.65 : 35.25} {filter?.exchange || 'USD'}</Typography>
            </Box>
          </Stack>
        </Card>

        <Tabs
          className={"mt-6"}
          value={tab}
          onChange={(e, a) => setTab(a)}
          variant="fullWidth"
          allowScrollButtonsMobile
        >
          {['pages.reports.user-reports.providerReports', 'pages.reports.user-reports.financeReports'].map((tab, _) => {
            return (
              <Tab
                iconPosition="start"
                label={t(tab)}
                sx={{ minHeight: '50px' }}
                value={_}
                key={tab}
              />
            );
          })}
        </Tabs>

        <CustomTabPanel className={"p-0 m-0"} value={tab} index={0}>
          <ProviderReportsTab
            filter={filter}
            updateFilter={updateFilter}
          />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <ProviderReportsTab
            filter={filter}
            updateFilter={updateFilter}
          />
        </CustomTabPanel>

      </ParentCard>
    </Box>
  );
}

export default memo(Page);
