import React, {Fragment} from 'react';
import { t } from 'i18next';
import GameStatBox from "@/app/(default)/components/users/dashboard/GameStatBox";
import {Grid, Divider,Button,Typography } from "@mui/material";

function SportsStats() {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item sm={4} xs={12} >
          <Typography variant={"h3"}>{t('pages.user-management.user_management_dashboard.Sport Bets')}</Typography>
        </Grid>
        <Grid item container sm={8} xs={12}  spacing={1} justifyContent="end">
          <Grid item><Button color="primary">Today</Button></Grid>
          <Grid item><Button color="primary">Yesterday</Button></Grid>
          <Grid item><Button color="primary">Last 7 Days</Button></Grid>
        </Grid>
      </Grid>

      <Divider className={"my-6"}/>

      <Grid container spacing={1}>
        <GameStatBox
          title={"En Çok Tercih Ettigi Spor"}
          subTitle={"Futbol / Almanya / Bundesliga"}
          image={"/images/svgs/football-ball.svg"}
          data={[
            {
              title: "pages.user-management.user_management_dashboard.Played",
              value: 300000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Won",
              value: 124000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Difference",
              value: 760000,
              currency: "TRY"
            }
          ]}
        />
        <GameStatBox
          title={"En Çok Kazandıgi Spor"}
          subTitle={"Basketbol / ABD / NBA"}
          image={"/images/svgs/basketball-ball.svg"}
          data={[
            {
              title: "pages.user-management.user_management_dashboard.Played",
              value: 6200000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Won",
              value: 5624000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Difference",
              value: 160000,
              currency: "TRY"
            }
          ]}
        />
        <GameStatBox
          title={"En Çok Kaybettigi Spor"}
          subTitle={"Futbol / Fransa / Serie-A"}
          image={"/images/svgs/football-ball.svg"}
          data={[
            {
              title: "pages.user-management.user_management_dashboard.Played",
              value: 653000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Won",
              value: 544000,
              currency: "TRY"
            },
            {
              title: "pages.user-management.user_management_dashboard.Difference",
              value: 760000,
              currency: "TRY"
            }
          ]}
        />
      </Grid>
    </Fragment>
  );
}

export default SportsStats;