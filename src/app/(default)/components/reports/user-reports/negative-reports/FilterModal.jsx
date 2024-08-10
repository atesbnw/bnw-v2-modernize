import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import Stack from '@mui/material/Stack';
import TimeTabs from '@/app/components/shared/TimeTabs';

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button color="primary" startIcon={<IconFilter width={18} />} onClick={() => setOpen(true)}>
        {t('i.Filter')}
      </Button>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('pages.operator-management.operator-management.clearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter()
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t("pages.operator-management.operator-management.filter")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <TimeTabs justify={"start"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.operator-management.operator-management.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.reports.user-reports.loginLogsSearchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="browser">{t('pages.reports.user-reports.browser')}</CustomFormLabel>
                <CustomSelect
                  id="browser"
                  name="browser"
                  fullWidth
                  variant="outlined"
                  value={filter?.browser || "all"}
                  onChange={(e) => updateFilter('browser', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="Chrome">Chrome</MenuItem>
                  <MenuItem value="Opera">Opera</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="isp">{t('pages.reports.user-reports.isp')}</CustomFormLabel>
                <CustomSelect
                  id="isp"
                  name="isp"
                  fullWidth
                  variant="outlined"
                  value={filter?.isp || "all"}
                  onChange={(e) => updateFilter('isp', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="turkcell">Turkcell</MenuItem>
                  <MenuItem value="vodafone">Vodafone</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="timezone">{t('pages.reports.user-reports.timezone')}</CustomFormLabel>
                <CustomSelect
                  id="timezone"
                  name="timezone"
                  fullWidth
                  variant="outlined"
                  value={filter?.timezone || "all"}
                  onChange={(e) => updateFilter('timezone', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="istanbul">Istanbul (+3)</MenuItem>
                  <MenuItem value="moskow">Moskow (+2)</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="status">{t('pages.reports.user-reports.status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  variant="outlined"
                  value={filter?.status || "all"}
                  onChange={(e) => updateFilter('status', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </CustomSelect>
              </Grid>





            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button
              variant={"contained"}
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}>{t('pages.operator-management.operator-management.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
