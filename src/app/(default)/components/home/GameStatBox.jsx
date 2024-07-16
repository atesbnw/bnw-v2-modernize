import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CurrencyFormat from 'react-currency-format';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Grid from '@mui/material/Grid';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


function GameStatBox({title, subTitle, image, data = []}) {

  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.secondary.main;


  const seriesdoughnutchart = data?.slice(0,2)?.map(m => ({title: m?.title || "", value: m?.value || 0}));
  const optionsdoughnutchart = {
    chart: {
      id: 'donut-chart',
      fontFamily: '\'Plus Jakarta Sans\', sans-serif',
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
          labels: {
            style: {
              fontSize: "12px",
            },
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            show: true,
            total: {
              show: true,
              // label: 'Fark',
              color: theme.palette.text.primary,
              fontSize: '16px',
              fontWeight: 700,
              get label() {
                // const seriesTotal = w.globals.seriesTotals.reduce((a, b) => {
                //   return a + b;
                // }, 0);
                // const firstValue = w.globals.series[0];
                // const secondValue = w.globals.series[1];
                const val = seriesdoughnutchart?.map(m => m?.value);
                const seriesTotal = val.reduce((a, b) => {
                  return a + b;
                }, 0);
                const firstValue = val[0];
                const secondValue = val[1];
                const percentageDifference = Math.abs((firstValue - secondValue) / seriesTotal * 100).toFixed(2);
                return `${percentageDifference}%`;
                // return w.globals.seriesTotals.reduce((a, b) => {
                //   return a + b;
                // }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
      position: 'bottom',
      width: '50px',
    },
    labels: seriesdoughnutchart?.map(m => m?.title),
    colors: [primary, primarylight],
    tooltip: {
      enabled: false,
      theme: 'dark',
      fillSeriesColor: false,
    },
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Paper sx={{
        p:3,
        flex: 1
      }}>
        <Stack direction={"column"}>
          {title && (
            <Box>
              <Typography variant="h6">{title}</Typography>
            </Box>
          )}
          <Box>
            {subTitle && <Typography variant="subtitle1">{subTitle}</Typography>}
            <Stack direction={"row"} sx={{gap: 2}}>
              <Box className={"justify-center items-center flex"}>
                <img
                  src={image}
                  alt={title}
                  className={"h-20 aspect-square object-contain bg-white rounded-xl p-1"}
                />
              </Box>
              <Box className={"flex flex-col justify-center gap-2 flex-1"}>
                {data && data?.map((item) => (
                  <Typography variant={"body1"}>{item?.title}: <CurrencyFormat value={item?.value} displayType={'text'} thousandSeparator={true} prefix={'₺'} /></Typography>
                ))}
              </Box>
              <Box>
                <Chart
                  options={optionsdoughnutchart}
                  series={seriesdoughnutchart?.map(m => m?.value || 0)}
                  type="donut"
                  height="140"
                  width={"140px"}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default memo(GameStatBox);
