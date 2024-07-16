'use client';
import Box from '@mui/material/Box';
import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '@/app/components/container/PageContainer';
import FinancialGraph from '@/app/(default)/components/home/FinancialGraph';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { Grid, Typography } from '@mui/material';
import TopCircles from '@/app/(default)/components/home/Circle';
import StatCards from '@/app/(default)/components/home/StatCards';
import StatsRow from '@/app/(default)/components/home/StatsRow';
import OverviewTable from '@/app/(default)/components/home/OverviewTable';
import { sportsbookOverview } from '@/app/(default)/components/home/fake/sportsbookOverview';
import { casinoOverview } from '@/app/(default)/components/home/fake/casinoOverview';

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="">



      <TimeTabs topElement={<TopCircles />}>
        {(time) => (
          <Fragment>
            <FinancialGraph timeRange={time} />
            <StatCards />
            <StatsRow />


            <OverviewTable
              title={"Sportsbook Genel Bakış"}
              data={[
                ...sportsbookOverview
              ]}
            />


            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <OverviewTable
                  title={"Casino Genel Bakış"}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <OverviewTable
                  title={"Poker Genel Bakış"}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <OverviewTable
                  title={"Sanal Oyunlar Genel Bakış"}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
            </Grid>


            <OverviewTable
              title={"Bonus Genel Bakış"}
              data={[
                ...sportsbookOverview
              ]}
            />


          </Fragment>
        )}
      </TimeTabs>


      <Box mt={3}>

        {/*<Grid container spacing={3}>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={12}>*/}
        {/*    <TopCards />*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={8}>*/}
        {/*    <RevenueUpdates isLoading={isLoading} />*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={4}>*/}
        {/*    <Grid container spacing={3}>*/}
        {/*      <Grid item xs={12} sm={6} lg={12}>*/}
        {/*        <YearlyBreakup isLoading={isLoading} />*/}
        {/*      </Grid>*/}
        {/*      <Grid item xs={12} sm={6} lg={12}>*/}
        {/*        <MonthlyEarnings isLoading={isLoading} />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={4}>*/}
        {/*    <EmployeeSalary isLoading={isLoading} />*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={4}>*/}
        {/*    <Grid container spacing={3}>*/}
        {/*      <Grid item xs={12} sm={6}>*/}
        {/*        <Customers isLoading={isLoading} />*/}
        {/*      </Grid>*/}
        {/*      <Grid item xs={12} sm={6}>*/}
        {/*        <Projects isLoading={isLoading} />*/}
        {/*      </Grid>*/}
        {/*      <Grid item xs={12}>*/}
        {/*        <Social />*/}
        {/*      </Grid>*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={4}>*/}
        {/*    <SellingProducts />*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={4}>*/}
        {/*    <WeeklyStats isLoading={isLoading} />*/}
        {/*  </Grid>*/}
        {/*  /!* column *!/*/}
        {/*  <Grid item xs={12} lg={8}>*/}
        {/*    <TopPerformers />*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Box>
    </PageContainer>
  );
}
