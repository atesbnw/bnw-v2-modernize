import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";

function TitleBar({ LeftImage, SubTitle, Left, title, Right }) {
  return (
    <Box
      fullWidth
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        width: 100 +"%",
        alignItems: "center",
        gap:1,
        mb:3
      }}>
      {LeftImage && (
        <Box sx={{alignItems:"center"}}>
          <LeftImage />
        </Box>
      )}
      {Left && (
        <Box sx={{alignItems:"center"}}>
          <Left />
        </Box>
      )}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h2" component="div">
          {title}
          {SubTitle && (
            <SubTitle />
          )}
        </Typography>
      </Box>
      {Right && (
        <Box sx={{
          alignItems:"center"
        }}>
          <Right />
        </Box>
      )}
    </Box>
  );
}

export default memo(TitleBar);
