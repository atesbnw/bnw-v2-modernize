import React, { Fragment, memo } from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';

const Circle = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
}));

const TopCircles = () => {
  return(
    <Fragment>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <Circle>1423</Circle>
        <Typography variant="subtitle1" align="center">ONLINE KULLANICI</Typography>
      </Grid>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <Circle>14</Circle>
        <Typography variant="subtitle1" align="center">ONLINE YETKİLİ</Typography>
      </Grid>
    </Fragment>
  )
}

export default memo(TopCircles);
