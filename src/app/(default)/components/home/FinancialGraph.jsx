"use client";
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Grid, Button, Paper, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { styled } from '@mui/system';
import SkeletonWeeklyStatsCard from '@/app/components/dashboards/skeleton/WeeklyStats';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import "dayjs/locale/tr";
import { t } from 'i18next';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



const FinancialGraph = ({ isLoading, timeRange }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;


  const optionsareachart = {
    chart: {
      id: 'area-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: '3',
      curve: 'smooth',
    },
    colors: [primary, secondary],
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00',
      ],
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const [chartData, setChartData] = useState([
    {
      name: 'Finance',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Game',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Audience',
      data: [25, 12, 25, 13, 24, 42, 25],
    },
  ]);

  const generateRandomData = useCallback((length) => {
    const randomData = [];
    for (let i = 0; i < length; i++) {
      randomData.push(Math.floor(Math.random() * 100));
    }
    return randomData;
  },[]);


  useEffect(() => {
    const investmentData = generateRandomData(7);
    const withdrawalData = generateRandomData(7);
    const audienceData = generateRandomData(7);
    setChartData([
      {
        name: 'Finance',
        data: investmentData,
      },
      {
        name: 'Game',
        data: withdrawalData,
      },
      {
        name: 'Audience',
        data: audienceData,
      },
    ]);
  }, [timeRange]);

  return (
    <Paper elevation={3} style={{ padding: 20 }}>

      <Grid lg={12} sm={12}>
        {isLoading ? (
          <SkeletonWeeklyStatsCard />
        ) : (
          <DashboardCard title="" subtitle="">
            {/*<ParentCard title="Area Chart">*/}
              <Chart
                options={optionsareachart}
                series={chartData}
                type="area"
                height="300px"
                width={'100%'}
              />
            {/*</ParentCard>*/}
          </DashboardCard>
        )}
      </Grid>
    </Paper>
  );
};

export default memo(FinancialGraph);
