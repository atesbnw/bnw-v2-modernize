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

              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="amount">{t('pages.reports.user-reports.amount')}</CustomFormLabel>
                <CustomTextField
                  id="amount"
                  name="amount"
                  type={"number"}
                  placeholder={t('pages.reports.user-reports.amount')}
                  variant="outlined"
                  fullWidth
                  value={filter?.amount}
                  onChange={(e) => updateFilter('amount', e?.target.value)}
                />
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="memberSegment">{t('pages.reports.user-reports.memberSegment')}</CustomFormLabel>
                <CustomSelect
                  id="memberSegment"
                  name="memberSegment"
                  fullWidth
                  variant="outlined"
                  value={filter?.memberSegment || "all"}
                  onChange={(e) => updateFilter('memberSegment', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="Chrome">Chrome</MenuItem>
                  <MenuItem value="Opera">Opera</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="activityType">{t('pages.reports.user-reports.activityType')}</CustomFormLabel>
                <CustomSelect
                  id="activityType"
                  name="activityType"
                  fullWidth
                  variant="outlined"
                  value={filter?.activityType || "all"}
                  onChange={(e) => updateFilter('activityType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="turkcell">Turkcell</MenuItem>
                  <MenuItem value="vodafone">Vodafone</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="loyalty">{t('pages.reports.user-reports.loyalty')}</CustomFormLabel>
                <CustomSelect
                  id="loyalty"
                  name="loyalty"
                  fullWidth
                  variant="outlined"
                  value={filter?.loyalty || "all"}
                  onChange={(e) => updateFilter('loyalty', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="istanbul">Istanbul (+3)</MenuItem>
                  <MenuItem value="moskow">Moskow (+2)</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.reports.user-reports.transactionType')}</CustomFormLabel>
                <CustomSelect
                  id="transactionType"
                  name="transactionType"
                  fullWidth
                  variant="outlined"
                  value={filter?.transactionType || "all"}
                  onChange={(e) => updateFilter('transactionType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.reports.user-reports.category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  variant="outlined"
                  value={filter?.category || "all"}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="sub_category">{t('pages.reports.user-reports.sub_category')}</CustomFormLabel>
                <CustomSelect
                  id="sub_category"
                  name="sub_category"
                  fullWidth
                  variant="outlined"
                  value={filter?.sub_category || "all"}
                  onChange={(e) => updateFilter('sub_category', e?.target.value)}
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
