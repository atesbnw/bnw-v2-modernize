import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { t } from 'i18next';
import {InputAdornment, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const games = [
  {
    id: 1,
    name: 'Slot1',
    limit: '100.00',
  },
  {
    id: 2,
    name: 'Slot2',
    limit: '100.00',
  },
  {
    id: 3,
    name: 'Slot3',
    limit: '100.00',
  },
  {
    id: 4,
    name: 'Slot4',
    limit: '100.00',
  }
]
const payment = [
  {
    id: 1,
    name: 'Method1',
    limit: '100.00',
  },
  {
    id: 2,
    name: 'Method2',
    limit: '100.00',
  },
  {
    id: 3,
    name: 'Method3',
    limit: '100.00',
  },
  {
    id: 4,
    name: 'Method4',
    limit: '100.00',
  }
]
function ProviderLimitsModal({category, title, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Tooltip title={t('i.Add')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Tooltip>

      <SideDialog
        title={title}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              {category === 'casino' ? ( games.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    fullWidth
                    id={item.id}
                    label={item.name}
                    sx={{mt:1}}
                    value={item.limit}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">₺</InputAdornment>,
                    }}
                  />
                </Grid>
                ))
              ) : (
                payment.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <TextField
                      fullWidth
                      id={item.id}
                      label={item.name}
                      sx={{mt:1}}
                      value={item.limit}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">₺</InputAdornment>,
                      }}
                    />
                  </Grid>
                ))
              )
              }
            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth
                    variant={'contained'}
                    onClick={() => {
                      onConfirm();
                      setOpen(false);
                    }}>{t('i.Filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ProviderLimitsModal);
