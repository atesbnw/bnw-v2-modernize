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
                <TimeTabs justify={"full"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomFormLabel
                  htmlFor="id">{t('pages.user-management.user_management_reports.Transanction Id')}</CustomFormLabel>
                <CustomOutlinedInput
                  id="id"
                  name="id"
                  fullWidth
                  value={filter?.id}
                  onChange={(e) => updateFilter('id', e?.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="amount">{t('pages.user-management.user_management_reports.Amount')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="amount"
                  name="amount"
                  type="number"
                  fullWidth
                  value={filter?.amount}
                  onChange={(e) => updateFilter('amount', e?.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="balance">{t('pages.user-management.user_management_reports.Balance')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="balance"
                  name="balance"
                  type="number"
                  fullWidth
                  value={filter?.balance}
                  onChange={(e) => updateFilter('balance', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.user-management.user_management_reports.Transaction Type')}</CustomFormLabel>
                <CustomSelect
                  id="transactionType"
                  name="transactionType"
                  fullWidth
                  value={filter?.transactionType}
                  onChange={(e) => updateFilter('transactionType', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.user-management.user_management_reports.Category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  value={filter?.category}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="subCategory">{t('pages.user-management.user_management_reports.Sub Category')}</CustomFormLabel>
                <CustomSelect
                  id="subCategory"
                  name="subCategory"
                  fullWidth
                  value={filter?.subCategory}
                  onChange={(e) => updateFilter('subCategory', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormLabel
                  htmlFor="operator">{t('pages.user-management.user_management_reports.Operator')}</CustomFormLabel>
                <CustomSelect
                  id="operator"
                  name="operator"
                  fullWidth
                  value={filter?.operator}
                  onChange={(e) => updateFilter('operator', e?.target.value)}
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
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="operator">{t('pages.user-management.user_management_reports.sameDayTransactions')}</CustomFormLabel>
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
