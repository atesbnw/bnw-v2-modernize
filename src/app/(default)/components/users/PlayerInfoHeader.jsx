import React, {Fragment, memo} from 'react';
import {Divider, Fab, Grid, Stack} from "@mui/material";
import {
  IconBuildingStore,
  IconCheck,
  IconCircle,
  IconHeart,
  IconLock,
  IconPlayerPause,
  IconStar, IconUserCheck
} from "@tabler/icons-react";
import {t} from "i18next";

function PlayerInfoHeader({children}) {
  return (
    <Fragment>
      <Grid container mt={1} mb={2} spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item>
          {children}
        </Grid>
        <Stack direction="row" spacing={1}>
          <Fab size="small" sx={{ backgroundColor: '#ff7300' }} >
            <IconPlayerPause size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#1fcd36' }}>
            <IconCircle size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#121212' }} disabled>
            <IconLock size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#1fcd36' }} >
            <IconCheck size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#ffd600' }} >
            <IconStar size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#121212' }} >
            <IconBuildingStore size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#CD201F' }} >
            <IconHeart size={16} color="white"/>
          </Fab>
          <Fab size="small" sx={{ backgroundColor: '#1877F2' }} disabled>
            <IconUserCheck size={16} color="white"/>
          </Fab>
        </Stack>
      </Grid>
      <Divider/>
    </Fragment>
  );
}

export default memo(PlayerInfoHeader);