"use client";
import React, { memo, useCallback, useState } from 'react';
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
import TextField from '@mui/material/TextField';
import { Label } from '@mui/icons-material';
import dayjs from 'dayjs';
import "dayjs/locale/tr";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Circle = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
}));

const FinancialGraph = ({ isLoading }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const [timeRange, setTimeRange] = useState(0);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState([dayjs(), dayjs().add(7,"days")]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      name: 'Yatırım',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Çekim',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);

  const generateRandomData = useCallback((length) => {
    const randomData = [];
    for (let i = 0; i < length; i++) {
      randomData.push(Math.floor(Math.random() * 100));
    }
    return randomData;
  },[]);

  const changeRange = useCallback((v) => {
    const investmentData = generateRandomData(7);
    const withdrawalData = generateRandomData(7);
    setChartData([
      {
        name: 'Yatırım',
        data: investmentData,
      },
      {
        name: 'Çekim',
        data: withdrawalData,
      },
    ]);
    setTimeRange(v);
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
          <Circle>1423</Circle>
          <Typography variant="subtitle1" align="center">ONLINE KULLANICI</Typography>
        </Grid>
        <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
          <Circle>14</Circle>
          <Typography variant="subtitle1" align="center">ONLINE YETKİLİ</Typography>
        </Grid>
        <Grid sx={{flex: 1}} />
        <Grid item>
          <Button variant={timeRange===0 ? "contained" : "outlined"} onClick={() => changeRange(0)} color="primary">Bugün</Button>
        </Grid>
        <Grid item>
          <Button variant={timeRange===1 ? "contained" : "outlined"} onClick={() => changeRange(1)}>Dün</Button>
        </Grid>
        <Grid item>
          <Button variant={timeRange===2 ? "contained" : "outlined"} onClick={() => changeRange(2)}>Son 7 Gün</Button>
        </Grid>
        <Grid item>
          <Button variant={timeRange===3 ? "contained" : "outlined"} onClick={() => changeRange(3)}>Son 15 Gün</Button>
        </Grid>
        <Grid item>
          <Button variant={timeRange===4 ? "contained" : "outlined"} onClick={() => changeRange(4)}>Son 30 Gün</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleClickOpen}>
            {time?.[0] && time?.[1] ? `${dayjs(time?.[0]).format("DD.MM.YYYY")} - ${dayjs(time?.[1]).format("DD.MM.YYYY")}` : 'Tarih Seç'}
          </Button>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Tarih Aralığı Seç</DialogTitle>
          <DialogContent>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
          <DemoContainer components={[
            'DateRangePicker',
          ]}>
            <DemoItem
              label={
                <></>
              }
              component="DateRangePicker"
            >
              <DateRangePicker
                defaultValue={time}
                localeText={{
                  start: '',
                  end: '',
                }}
                format="DD/MM/YYYY"
                onChange={(value) => setTime(value)}
              />
            </DemoItem>
          </DemoContainer>

            </LocalizationProvider>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">İptal</Button>
            <Button onClick={handleClose} color="primary">Tamam</Button>
          </DialogActions>
        </Dialog>
      </Grid>
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
