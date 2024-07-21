import React, {Fragment} from 'react';
import { t } from 'i18next';
import GameStatBox from "@/app/(default)/components/users/dashboard/GameStatBox";
import {Grid, Divider,Button,Typography } from "@mui/material";

function SportsStats() {
  return (
    <Fragment>

      <Grid container spacing={1}>
        <GameStatBox
          title={t('pages.user-management.user_management_dashboard.Most Played Sport')}
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
          title={t('pages.user-management.user_management_dashboard.Most Won Sport')}
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
          title={t('pages.user-management.user_management_dashboard.Most Lost Sport')}
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