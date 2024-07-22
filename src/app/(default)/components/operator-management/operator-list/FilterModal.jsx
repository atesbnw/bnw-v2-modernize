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

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Tooltip title={t('pages.operator-management.operator-management.filter')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <IconFilter />
        </IconButton>
      </Tooltip>

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
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.operator-management.operator-management.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.operator-management.operator-management.searchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="registrationDate">{t('pages.operator-management.operator-management.registrationDate')}</CustomFormLabel>
                <CustomTextField
                  id="registrationDate"
                  name="transactionDate"
                  variant="outlined"
                  fullWidth
                  value={filter?.transactionDate}
                  onChange={(e) => updateFilter('transactionDate', e?.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="approvalType">{t('pages.operator-management.operator-management.approvalType')}</CustomFormLabel>
                <CustomSelect
                  id="approvalType"
                  name="approvalType"
                  fullWidth
                  variant="outlined"
                  value={filter?.approvalType || 'all'}
                  onChange={(e) => updateFilter('approvalType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Approved</MenuItem>
                  <MenuItem value="casino">Waiting</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="account">{t('pages.operator-management.operator-management.account')}</CustomFormLabel>
                <CustomSelect
                  id="account"
                  name="account"
                  fullWidth
                  variant="outlined"
                  value={filter?.account || 'all'}
                  onChange={(e) => updateFilter('account', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara-key">Locked</MenuItem>
                  <MenuItem value="egt">Active</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="activity">{t('pages.operator-management.operator-management.activity')}</CustomFormLabel>
                <CustomSelect
                  id="activity"
                  name="activity"
                  fullWidth
                  variant="outlined"
                  value={filter?.activity || 'all'}
                  onChange={(e) => updateFilter('activity', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="req">Online</MenuItem>
                  <MenuItem value="bet">Offline</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="memberType">{t('pages.operator-management.operator-management.memberType')}</CustomFormLabel>
                <CustomSelect
                  id="memberType"
                  name="memberType"
                  fullWidth
                  variant="outlined"
                  value={filter?.memberType || 'all'}
                  onChange={(e) => updateFilter('memberType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="new">VIP</MenuItem>
                  <MenuItem value="confirmed">Customer</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} className={"columns-2 mt-3"}>
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label={t('pages.operator-management.operator-management.todayBirthdays')}
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label={t('pages.operator-management.operator-management.sameDayRegistered')}
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label={t('pages.operator-management.operator-management.sameIP')}
                />
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label={t('pages.operator-management.operator-management.sameLastLogin')}
                />
              </Grid>

            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth
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
