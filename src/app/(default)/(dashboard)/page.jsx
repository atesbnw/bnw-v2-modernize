'use client';
import Box from '@mui/material/Box';
import React, { Fragment, useEffect, useState } from 'react';
import PageContainer from '@/app/components/container/PageContainer';
import FinancialGraph from '@/app/(default)/components/home/FinancialGraph';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { Grid, Card } from '@mui/material';
import TopCircles from '@/app/(default)/components/home/Circle';
import StatCards from '@/app/(default)/components/home/StatCards';
import StatsRow from '@/app/(default)/components/home/StatsRow';
import OverviewTable from '@/app/(default)/components/home/OverviewTable';
import { sportsbookOverview } from '@/app/(default)/components/home/fake/sportsbookOverview';
import { casinoOverview } from '@/app/(default)/components/home/fake/casinoOverview';
import DashboardCard from '@/app/components/shared/DashboardCard';
import GameStatBox from '@/app/(default)/components/home/GameStatBox';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { t } from 'i18next';
import { faker } from '@faker-js/faker';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';

function Dashboard() {
  const [tab, setTab] = useState(0);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="">



      <TimeTabs customStyle topElement={<TopCircles />}>
        {(time) => (
          <Fragment>
            <FinancialGraph timeRange={time} />

            <Card variant="outlined" className={"mt-6 mb-2"}>
              <StatCards />
            </Card>
            {/*<StatsRow />*/}


            {/*<OverviewTable*/}
            {/*  title={"Sportsbook Genel Bakış"}*/}
            {/*  data={[*/}
            {/*    ...sportsbookOverview*/}
            {/*  ]}*/}
            {/*/>*/}


            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4}>
                <OverviewTable
                  title={t("Dashboard.Overviews.Casino")}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <OverviewTable
                  title={t("Dashboard.Overviews.Poker")}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <OverviewTable
                    title={t("Dashboard.Overviews.Virtual Games")}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
            </Grid>


            <OverviewTable
              title={t("Dashboard.Overviews.Bonus")}
              data={[
                ...sportsbookOverview
              ]}
            />

            <Box className={"space-y-4"}>
              <DashboardCard
                title={t('pages.reports.user-reports.mostPlay')}
                subtitle={""}
              >
                <Grid container spacing={1}>
                  <GameStatBox
                    title={"Casino"}
                    subTitle={"EGT"}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s"}
                    data={[
                      {
                        title: "Play",
                        value: 300000,
                        currency: "TRY"
                      },
                      {
                        title: "Win",
                        value: 124000,
                        currency: "TRY"
                      },
                      {
                        title: "Diff",
                        value: 760000,
                        currency: "TRY"
                      }
                    ]}
                  />
                  <GameStatBox
                    title={"Live Casino"}
                    subTitle={"Evolution"}
                    image={"https://www.paulbellard.com/wp-content/uploads/2020/03/evolution-gaming-logo.jpg"}
                    data={[
                      {
                        title: "Play",
                        value: 6200000,
                        currency: "TRY"
                      },
                      {
                        title: "Win",
                        value: 5624000,
                        currency: "TRY"
                      },
                      {
                        title: "Diff",
                        value: 160000,
                        currency: "TRY"
                      }
                    ]}
                  />
                  <GameStatBox
                    title={"Virtual Games"}
                    subTitle={"EGT"}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s"}
                    data={[
                      {
                        title: "Play",
                        value: 653000,
                        currency: "TRY"
                      },
                      {
                        title: "Win",
                        value: 544000,
                        currency: "TRY"
                      },
                      {
                        title: "Diff",
                        value: 760000,
                        currency: "TRY"
                      }
                    ]}
                  />
                </Grid>
              </DashboardCard>



            <DashboardCard
              title={""}
              subtitle={""}
            >

              <Box justifyContent={'start'} display="flex" sx={{ flexDirection: "column", maxWidth: { xs: 320, sm: '100%' } }}>
                <Tabs
                  value={tab}
                  onChange={(e,a) => setTab(a)}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  aria-label="scrollable prevent tabs example"
                >
                  {["Slot Games", "Live Casino", "Virtual Games"].map((tab,_) => {
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

                {Array.from(Array(3)).map((_, index) => (
                  <CustomTabPanel value={tab} index={index}>
                    <Grid container spacing={1}>
                      <GameStatBox
                        title={t("Dashboard.Most Played Game")}
                        subTitle={"Wild & Turkey / Netent"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGO2wGcJymC1ydiocdohoy1YgVg-L196iWQ&s"}
                        data={[
                          {
                            title: "Play",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Win",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Diff",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          }
                        ]}
                      />
                      <GameStatBox
                        title={t("Dashboard.Most Profitable Game")}
                        subTitle={"Twin Spin / Netent"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvUttnM9IyBOfzC0QvTGK7uc_0L_0Iz4IBg&s"}
                        data={[
                          {
                            title: "Play",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Win",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Diff",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          }
                        ]}
                      />
                      <GameStatBox
                        title={t("Dashboard.Most Losing Game")}
                        subTitle={"Mythic Maiden / Netent"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7Yn6AoRDFzBWW3prXnT8AZ2-E3GFrb4PAg&s"}
                        data={[
                          {
                            title: "Play",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Win",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          },
                          {
                            title: "Diff",
                            value: faker.datatype.number({ min: 100000000, max: 999000000 }),
                            currency: "TRY"
                          }
                        ]}
                      />
                    </Grid>
                  </CustomTabPanel>
                ))}
              </Box>
            </DashboardCard>


            {/*<DashboardCard*/}
            {/*  title={"Spor Bahisleri"}*/}
            {/*  subtitle={""}*/}
            {/*>*/}
            {/*  <Grid container spacing={1}>*/}
            {/*    <GameStatBox*/}
            {/*      title={"En Çok Tercih Edilen Spor"}*/}
            {/*      subTitle={"Futbol / Almanya / Bundesliga"}*/}
            {/*      image={"/images/svgs/football-ball.svg"}*/}
            {/*      data={[*/}
            {/*        {*/}
            {/*          title: "Play",*/}
            {/*          value: 300000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Win",*/}
            {/*          value: 124000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Diff",*/}
            {/*          value: 760000,*/}
            {/*          currency: "TRY"*/}
            {/*        }*/}
            {/*      ]}*/}
            {/*    />*/}
            {/*    <GameStatBox*/}
            {/*      title={"En Çok Kazandıran Spor"}*/}
            {/*      subTitle={"Basketbol / ABD / NBA"}*/}
            {/*      image={"/images/svgs/basketball-ball.svg"}*/}
            {/*      data={[*/}
            {/*        {*/}
            {/*          title: "Play",*/}
            {/*          value: 6200000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Win",*/}
            {/*          value: 5624000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Diff",*/}
            {/*          value: 160000,*/}
            {/*          currency: "TRY"*/}
            {/*        }*/}
            {/*      ]}*/}
            {/*    />*/}
            {/*    <GameStatBox*/}
            {/*      title={"En Çok Kaybettiren Spor"}*/}
            {/*      subTitle={"Futbol / Fransa / Serie-A"}*/}
            {/*      image={"/images/svgs/football-ball.svg"}*/}
            {/*      data={[*/}
            {/*        {*/}
            {/*          title: "Play",*/}
            {/*          value: 653000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Win",*/}
            {/*          value: 544000,*/}
            {/*          currency: "TRY"*/}
            {/*        },*/}
            {/*        {*/}
            {/*          title: "Diff",*/}
            {/*          value: 760000,*/}
            {/*          currency: "TRY"*/}
            {/*        }*/}
            {/*      ]}*/}
            {/*    />*/}
            {/*  </Grid>*/}
            {/*</DashboardCard>*/}

            </Box>


          </Fragment>
        )}
      </TimeTabs>


      {/*<Box mt={3}>*/}

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
      {/*</Box>*/}
    </PageContainer>
  );
}

export default React.memo(Dashboard);
