import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import TimeTabs from '@/app/components/shared/TimeTabs';

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Tooltip title={t('i.Filter')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <IconFilter />
        </IconButton>
      </Tooltip>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('i.ClearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter();
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t('i.Filter')}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <TimeTabs />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.settings.commission-percents.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.settings.commission-percents.methodSearchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.settings.commission-percents.Category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  value={filter?.category || "all"}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="popular-slots">Popular Slots</MenuItem>
                </CustomSelect>
              </Grid>
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

export default memo(FilterModal);
