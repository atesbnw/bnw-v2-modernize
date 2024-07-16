import React, { Fragment, memo } from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';

const Circle = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
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
  fontSize: 17,
  fontWeight: 'bold',
}));

const TopCircles = () => {
  return(
    <Fragment>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "row", gap: 2, py: 1}}>
        <Circle>1423</Circle>
        <Typography variant="subtitle2" align="center" sx={{py: 1}}>ONLINE KULLANICI</Typography>
      </Grid>
      <Grid item sx={{alignItems: "center", display: "flex", flexDirection: "row", gap: 2, py: 1}}>
        <Circle>14</Circle>
        <Typography variant="subtitle2" align="center" sx={{py: 1}}>ONLINE YETKİLİ</Typography>
      </Grid>
    </Fragment>
  )
}

export default memo(TopCircles);
