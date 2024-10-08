import React, {Fragment, memo, useState } from 'react';
import {Box, Button, Fab, Fade, Paper, Popper, Typography} from "@mui/material";
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
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


function StatusInfo() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <ClickAwayListener onClickAway={e => anchorEl && handleClick(e)}>
        <Button color="warning" variant="outlined" onClick={handleClick}>{t('pages.user-management.user_management_user_management.statusInfo')}</Button>
      </ClickAwayListener>
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={"flex flex-col gap-3 p-2"}>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#ff7300' }} >
                  <IconPlayerPause size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.suspendedUser')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#1fcd36' }}>
                  <IconCircle size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.onlineStatus')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#121212' }}>
                  <IconLock size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.lockedAccount')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#1fcd36' }} >
                  <IconCheck size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.approvedMember')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#ffd600' }} >
                  <IconStar size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.vip')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#121212' }} >
                  <IconBuildingStore size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.merchant')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#CD201F' }} >
                  <IconHeart size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.loyalMember')}</Typography>
              </Box>
              <Box className={"flex items-center gap-4"}>
                <Fab size="small" sx={{ backgroundColor: '#1877F2' }}>
                  <IconUserCheck size={16} color="white"/>
                </Fab>
                <Typography>{t('pages.user-management.user_management_user_management.statusInfoList.newMember')}</Typography>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
}

export default memo(StatusInfo);
