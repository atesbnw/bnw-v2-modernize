import React, { memo, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconDice5, IconBallFootball } from '@tabler/icons-react';
import {t} from "i18next";

function CategoryStats() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        'title': 'Casino',
        'value': 'Wild&Turkey - 10 Bet - 10.23₺ - Spin',
        'type': 'casino'
      },
      {
        'title': 'Live Casino',
        'value': 'Twin Spin - Freespin 10X',
        'type': 'casino'
      },
      {
        'title': 'Virtual Games',
        'value': 'Twin Spin - 15 Bet - 10.23₺ - Spin',
        'type': 'virtual-games'
      },
    ]);
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => {
        const {title, value, icon, type} = item;
        return (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Box className={"flex flex-col md:flex-row gap-2 h-full justify-start  items-center bg-slate-500/5 flex-1 rounded-xl p-4 select-none"}>
              {type==="casino" ? <IconDice5 /> : <IconBallFootball />}
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

export default memo(CategoryStats);
