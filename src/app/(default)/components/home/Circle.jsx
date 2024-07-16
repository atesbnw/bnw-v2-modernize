import React, { Fragment, memo } from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';

const Circle = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.info.light,
  // color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  fontWeight: 'bold',
}));

const TopCircles = () => {
  return(
    <Fragment>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <Circle>1423</Circle>
        <Typography variant="subtitle2" align="center" sx={{py: 1}}>ONLINE KULLANICI</Typography>
      </Grid>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "column"}}>
        <Circle>14</Circle>
        <Typography variant="subtitle2" align="center" sx={{py: 1}}>ONLINE YETKİLİ</Typography>
      </Grid>
    </Fragment>
  )
}

export default memo(TopCircles);
