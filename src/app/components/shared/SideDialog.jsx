import React, { memo, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import { styled } from '@mui/system';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { IconX } from '@tabler/icons-react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FullHeightDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-container': {
    justifyContent: 'flex-end',
  },
  '& .MuiPaper-root': {
    margin: 0,
    height: '100vh',
    maxHeight: 'none',
    width: '30rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function SideDialog({
                                     open = false,
                                     onClose = () => {},
                                     title,
                                     content,
                                     actionButtons
}) {
  return (
    <FullHeightDialog
      unmountOnExit
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="full-height-dialog-title"
    >
      <DialogTitle id="full-height-dialog-title">
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography variant={"h4"} sx={{flex: 1}}>{title}</Typography>
          <IconButton onClick={onClose}>
            <IconX/>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      {actionButtons && (
        <DialogActions>
          <Box sx={{p: 4}}>
            {actionButtons}
          </Box>
        </DialogActions>
      )}
    </FullHeightDialog>
  );
}

export default memo(SideDialog);
