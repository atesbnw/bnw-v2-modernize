import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  Box, Chip,
  Stack,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import DashboardCard from '@/app/components/shared/DashboardCard';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { IconChartPieFilled, IconMenu2 } from '@tabler/icons-react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ParentCard from '@/app/components/shared/ParentCard';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import classNames from 'classnames';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


function OverviewTable({
                         title,
                         subtitle,
                         data = [],
                       }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  const optionsdoughnutchart = {
    chart: {
      id: 'donut-chart',
      fontFamily: '\'Plus Jakarta Sans\', sans-serif',
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriesdoughnutchart = [45, 15, 27, 18, 35];


  const getGridSize = useMemo(() => {
    if (data?.length === 1) {
      return 12;
    } else if (data?.length === 2) {
      return 6;
    } else if (data?.length === 3) {
      return 4;
    } else {
      return 4;
    }
  }, [data]);

  const [tab, setTab] = useState('list' || 'graph');
  const ChartActions = useCallback(() => {
    return (
      <ButtonGroup>
        <Button onClick={() => setTab('list')} variant={tab === 'list' ? 'contained' : 'text'}>
          <IconMenu2 />
        </Button>
        <Button onClick={() => setTab('graph')} variant={tab === 'graph' ? 'contained' : 'text'}>
          <IconChartPieFilled />
        </Button>
      </ButtonGroup>
    );
  }, [tab]);

  return (
    <Box sx={{
      p: 2,
    }}>
      <DashboardCard
        title={title}
        subtitle={subtitle}
        action={
          <ChartActions />
        }
      >
        <Grid container spacing={3}>
          {data && data?.map((table) => (
            <Grid item key={table?.id} xs={12} sm={12} md={getGridSize}>
              <Paper>
                {tab === 'list' ? (
                  <TableContainer>
                    <Table
                      aria-label="simple table"
                      sx={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <TableHead>
                        <TableRow>
                          {table?.columns?.map((basic, _) => (
                            <TableCell key={_}>
                              <Typography variant="subtitle2" fontWeight={600}>{basic}</Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {table?.rows?.map((basic) => (
                          <TableRow key={basic.id} className={classNames({
                            "bg-blue-500/40": !!basic?.highlight
                          })}>
                            <TableCell>
                              <Typography variant="subtitle2" fontWeight={600}>
                                {basic.name}
                              </Typography>
                            </TableCell>

                            {basic?.values && basic?.values?.map((value, i) => (
                              <TableCell id={basic?.id + '-' + i}>
                                <Typography variant="subtitle2">{value}</Typography>
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) : (
                  <ParentCard title="">
                    <Chart
                      options={optionsdoughnutchart}
                      series={seriesdoughnutchart}
                      type="donut"
                      height="300px"
                      width={"100%"}
                    />
                  </ParentCard>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DashboardCard>
    </Box>
  );
}

export default memo(OverviewTable);
