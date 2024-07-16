import React, { memo } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';

function OverviewTable() {

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        src={"/images/profile/user-1.jpg"}
        alt={'ProfileImg'}
        sx={{ borderRadius: '8px', width: 70, height: 70 }}
      />
      <Box>
        <Typography variant="h5">Super awesome, Vue coming soon!</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          22 March, 2023
        </Typography>
      </Box>
    </Stack>
  );
}

export default memo(OverviewTable);
