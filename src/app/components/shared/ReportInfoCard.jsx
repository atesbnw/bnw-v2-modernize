import React, {Fragment, memo, useState} from 'react';
import {Card, CardContent, Typography, Box, Button, Fab} from '@mui/material';
import { IconInfoCircle } from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import Tooltip from "@mui/material/Tooltip";

const ReportInfoCard = ({ title, value, icon, info }) => {
  const theme = useTheme();

  const TooltipContent = ({ info }) => (
    <div>
      <Typography variant="body1"><strong>Transaction Time:</strong> {info.transactionTime}</Typography>
      <Typography variant="body1"><strong>User:</strong> {info.user}</Typography>
    </div>
  );

  return (
    <Fragment>
      <Box className={"flex gap-3 items-center p-6 justify-center group"} bgcolor={'info.light'}>
        <Box sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 2,
          p:1,
          mr:1
        }} className={"items-center flex scale-90 group-hover:scale-100 transition-all ease-in-out"}>
          {icon}
        </Box>
        <Box className={"flex-1"}>
          <Typography
            color={"primary.main"}
            variant="body1"
            fontWeight={600}
            className={"select-none"}
          >
            {title}
          </Typography>
          <Typography
            // color={"text.secondary"}
            variant="h4"
            fontWeight={600}
            className={"select-none"}
          >
            {value}
          </Typography>
        </Box>
        {info && (
          <Box sx={{
            // backgroundColor: theme.palette.primary.main,
          }} className={"items-center flex scale-90 group-hover:scale-100 transition-all ease-in-out"}>
            <Tooltip title={<TooltipContent info={info} />} placement="top" >
              <Fab color="warning" size="small">
                <IconInfoCircle />
              </Fab>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default memo(ReportInfoCard);