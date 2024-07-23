"use client";
import React, {Fragment} from 'react';
import {Grid} from "@mui/material";
import TitleBar from "@/app/components/TitleBar";
import {t} from "i18next";
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TitleBar
            link="../tools"
            title={t('Tools.Bonuses')}
            subTitle={t('pages.tools.bonus.Create Bonus')}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.tools.bonus.Create Bonus')}
          >
              qweqweqweqwewq
          </ParentCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Page;