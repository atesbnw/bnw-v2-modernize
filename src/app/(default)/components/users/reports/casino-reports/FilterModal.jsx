import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import {InputAdornment, MenuItem} from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import TimeTabs from "@/app/components/shared/TimeTabs";

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button color="primary" startIcon={<IconFilter width={18} />} onClick={() => setOpen(true)}>
        {t('i.Filter')}
      </Button>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('pages.user-management.user_management_user_management.clearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter()
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t("pages.user-management.user_management_user_management.filter")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <TimeTabs justify={"full"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.user-management.user_management_reports.Search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.user-management.user_management_reports.Provider Name')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="minPlayed">{t('pages.user-management.user_management_reports.Min. Played')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="minPlayed"
                  name="minPlayed"
                  type="number"
                  fullWidth
                  value={filter?.minPlayed}
                  onChange={(e) => updateFilter('minPlayed', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="maxPlayed">{t('pages.user-management.user_management_reports.Max. Played')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="minPlayed"
                  name="minPlayed"
                  type="number"
                  fullWidth
                  value={filter?.minPlayed}
                  onChange={(e) => updateFilter('minPlayed', e?.target.value)}
                />
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
              }}>{t('pages.user-management.user_management_user_management.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
