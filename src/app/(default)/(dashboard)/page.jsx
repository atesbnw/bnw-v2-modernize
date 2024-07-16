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
import DashboardCard from '@/app/components/shared/DashboardCard';
import GameStatBox from '@/app/(default)/components/home/GameStatBox';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { t } from 'i18next';
import Link from 'next/link';
import CustomTabPanel from '@/app/(default)/components/home/CustomTabPanel';

export default function Dashboard() {
  const [tab, setTab] = useState(0);
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
              <Grid item xs={12} sm={12} md={4}>
                <OverviewTable
                  title={"Casino Genel Bakış"}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <OverviewTable
                  title={"Poker Genel Bakış"}
                  data={[
                    ...casinoOverview
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
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

            <Box className={"space-y-4"}>
              <DashboardCard
                title={"En çok oynanan sağlayıcılar"}
                subtitle={""}
              >
                <Grid container spacing={1}>
                  <GameStatBox
                    title={"Casino"}
                    subTitle={"EGT"}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s"}
                    data={[
                      {
                        title: "Oynanan",
                        value: 300000,
                        currency: "TRY"
                      },
                      {
                        title: "Kazanan",
                        value: 124000,
                        currency: "TRY"
                      },
                      {
                        title: "Fark",
                        value: 760000,
                        currency: "TRY"
                      }
                    ]}
                  />
                  <GameStatBox
                    title={"Canlı Casino"}
                    subTitle={"Evolution"}
                    image={"https://getlogovector.com/wp-content/uploads/2021/11/evolution-gaming-logo-vector.png"}
                    data={[
                      {
                        title: "Oynanan",
                        value: 6200000,
                        currency: "TRY"
                      },
                      {
                        title: "Kazanan",
                        value: 5624000,
                        currency: "TRY"
                      },
                      {
                        title: "Fark",
                        value: 160000,
                        currency: "TRY"
                      }
                    ]}
                  />
                  <GameStatBox
                    title={"Sanal Oyunlar"}
                    subTitle={"EGT"}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLayqzmzNCN8PAkSw63ZQ6Aa5dAiSeycMrA&s"}
                    data={[
                      {
                        title: "Oynanan",
                        value: 653000,
                        currency: "TRY"
                      },
                      {
                        title: "Kazanan",
                        value: 544000,
                        currency: "TRY"
                      },
                      {
                        title: "Fark",
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
                  {["Slot Oyunları", "Canlı Casino"].map((tab,_) => {
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

                <CustomTabPanel value={tab} index={0}>
                  <Grid container spacing={1}>
                    <GameStatBox
                      title={"En Çok Oynanan Oyun"}
                      subTitle={"Wild & Turkey / Netent"}
                      image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGO2wGcJymC1ydiocdohoy1YgVg-L196iWQ&s"}
                      data={[
                        {
                          title: "Oynanan",
                          value: 400000,
                          currency: "TRY"
                        },
                        {
                          title: "Kazanan",
                          value: 24000,
                          currency: "TRY"
                        },
                        {
                          title: "Fark",
                          value: 510000,
                          currency: "TRY"
                        }
                      ]}
                    />
                    <GameStatBox
                      title={"En Çok Kazandıran Oyun"}
                      subTitle={"Twin Spin / Netent"}
                      image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvUttnM9IyBOfzC0QvTGK7uc_0L_0Iz4IBg&s"}
                      data={[
                        {
                          title: "Oynanan",
                          value: 9200000,
                          currency: "TRY"
                        },
                        {
                          title: "Kazanan",
                          value: 8624000,
                          currency: "TRY"
                        },
                        {
                          title: "Fark",
                          value: 230000,
                          currency: "TRY"
                        }
                      ]}
                    />
                    <GameStatBox
                      title={"En Çok Kaybettiren Oyun"}
                      subTitle={"Mythic Maiden / Netent"}
                      image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7Yn6AoRDFzBWW3prXnT8AZ2-E3GFrb4PAg&s"}
                      data={[
                        {
                          title: "Oynanan",
                          value: 553000,
                          currency: "TRY"
                        },
                        {
                          title: "Kazanan",
                          value: 244000,
                          currency: "TRY"
                        },
                        {
                          title: "Fark",
                          value: 160000,
                          currency: "TRY"
                        }
                      ]}
                    />
                  </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={tab} index={1}>
                  Item 2
                </CustomTabPanel>
              </Box>
            </DashboardCard>


            <DashboardCard
              title={"Spor Bahisleri"}
              subtitle={""}
            >
              <Grid container spacing={1}>
                <GameStatBox
                  title={"En Çok Tercih Edilen Spor"}
                  subTitle={"Futbol / Almanya / Bundesliga"}
                  image={"/images/svgs/football-ball.svg"}
                  data={[
                    {
                      title: "Oynanan",
                      value: 300000,
                      currency: "TRY"
                    },
                    {
                      title: "Kazanan",
                      value: 124000,
                      currency: "TRY"
                    },
                    {
                      title: "Fark",
                      value: 760000,
                      currency: "TRY"
                    }
                  ]}
                />
                <GameStatBox
                  title={"En Çok Kazandıran Spor"}
                  subTitle={"Basketbol / ABD / NBA"}
                  image={"/images/svgs/basketball-ball.svg"}
                  data={[
                    {
                      title: "Oynanan",
                      value: 6200000,
                      currency: "TRY"
                    },
                    {
                      title: "Kazanan",
                      value: 5624000,
                      currency: "TRY"
                    },
                    {
                      title: "Fark",
                      value: 160000,
                      currency: "TRY"
                    }
                  ]}
                />
                <GameStatBox
                  title={"En Çok Kaybettiren Spor"}
                  subTitle={"Futbol / Fransa / Serie-A"}
                  image={"/images/svgs/football-ball.svg"}
                  data={[
                    {
                      title: "Oynanan",
                      value: 653000,
                      currency: "TRY"
                    },
                    {
                      title: "Kazanan",
                      value: 544000,
                      currency: "TRY"
                    },
                    {
                      title: "Fark",
                      value: 760000,
                      currency: "TRY"
                    }
                  ]}
                />
              </Grid>
            </DashboardCard>
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
