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
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomSwitch from "@/app/components/forms/theme-elements/CustomSwitch";

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Tooltip title={t('pages.user-management.user_management_user_management.filter')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <IconFilter />
        </IconButton>
      </Tooltip>

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
                <TimeTabs gridSize={12}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.user-management.user_management_reports.Search')}</CustomFormLabel>
                <CustomOutlinedInput
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.user-management.user_management_reports.UsernameID')}
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomFormLabel
                  htmlFor="device">{t('pages.user-management.user_management_reports.Device')}</CustomFormLabel>
                <CustomSelect
                  id="device"
                  name="device"
                  fullWidth
                  value={filter?.device}
                  onChange={(e) => updateFilter('device', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="browser">{t('pages.user-management.user_management_reports.Browser')}</CustomFormLabel>
                <CustomSelect
                  id="browser"
                  name="browser"
                  fullWidth
                  value={filter?.browser}
                  onChange={(e) => updateFilter('browser', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="isp">{t('pages.user-management.user_management_reports.ISP')}</CustomFormLabel>
                <CustomSelect
                  id="isp"
                  name="isp"
                  fullWidth
                  value={filter?.isp}
                  onChange={(e) => updateFilter('isp', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="timeZone">{t('pages.user-management.user_management_reports.Time Zone')}</CustomFormLabel>
                <CustomSelect
                  id="timeZone"
                  name="timeZone"
                  fullWidth
                  value={filter?.timeZone}
                  onChange={(e) => updateFilter('timeZone', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="status">{t('pages.user-management.user_management_reports.Status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  value={filter?.status}
                  onChange={(e) => updateFilter('status', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="sameIP">{t('pages.user-management.user_management_reports.Same IP')}</CustomFormLabel>
                <FormControlLabel control={<CustomSwitch />} />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="sameLocation">{t('pages.user-management.user_management_reports.Same Location')}</CustomFormLabel>
                <FormControlLabel control={<CustomSwitch />} />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="sameBrowser">{t('pages.user-management.user_management_reports.Same Browser')}</CustomFormLabel>
                <FormControlLabel control={<CustomSwitch />} />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="sameDevice">{t('pages.user-management.user_management_reports.Same Device')}</CustomFormLabel>
                <FormControlLabel control={<CustomSwitch />} />
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
