"use client";
import React, {memo, useState, Fragment} from 'react';
import {Grid} from "@mui/material";
import Stack from "@mui/material/Stack";
import TitleBar from "@/app/components/TitleBar";
import {t} from "i18next";

function Page(props) {
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Settings Menu.Sportsbook Limitations')}
            />
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Page;