import React, { memo, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TitleBar({ Left, title, Right }) {
  return (
    <Box
      fullWidth
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        width: 100 +"%",
        alignItems: "center",
        gap:3
      }}>
      {Left && (
        <Box sx={{
          alignItems:"center"
        }}>
          <Left />
        </Box>
      )}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h2" component="div">{title}</Typography>
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
