import React, { memo, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconDevices, IconHistoryToggle } from '@tabler/icons-react';
import {t} from "i18next";

function LastActionsInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        'title': t("pages.user-management.user_management_dashboard.last_login"),
        'value': '16/07/2024 09:53',
        'type': 'date'
      },
      {
        'title': t("pages.user-management.user_management_dashboard.last_deposit"),
        'value': '14/07/2024 09:53',
        'type': 'date'
      },
      {
        'title': t("pages.user-management.user_management_dashboard.last_withdraw"),
        'value': '15/07/2024 09:53',
        'type': 'date'
      },
      {
        'title': t("pages.user-management.user_management_dashboard.last_device"),
        'value': 'iPhone 15 Pro Max',
        'type': 'device'
      },
    ]);
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => {
        const {title, value, icon, type} = item;
        return (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Box className={"flex flex-col md:flex-row gap-2 h-full justify-start  items-center bg-slate-500/5 flex-1 rounded-xl p-3 select-none"}>
              {type==="date" ? <IconHistoryToggle /> : <IconDevices />}
              <Box className={"md:items-start items-center flex flex-col"}>
                <Typography variant={'body2'} fontWeight={'bold'}>{title}</Typography>
                <Typography variant={'body1'}>{value}</Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default memo(LastActionsInfo);
