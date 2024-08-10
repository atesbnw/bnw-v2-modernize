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
                  placeholder={t('pages.reports.user-reports.operatorSearchPlaceholder')}
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
                  placeholder={t('pages.reports.user-reports.amount')}
                  variant="outlined"
                  fullWidth
                  value={filter?.amount}
                  onChange={(e) => updateFilter('amount', e?.target.value)}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="transaction">{t('pages.reports.user-reports.transaction')}</CustomFormLabel>
                <CustomSelect
                  id="transaction"
                  name="transaction"
                  fullWidth
                  variant="outlined"
                  value={filter?.transaction || "all"}
                  onChange={(e) => updateFilter('transaction', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="deposit">Deposit</MenuItem>
                  <MenuItem value="withdraw">Withdraw</MenuItem>
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
                  <MenuItem value="casino">Casino</MenuItem>
                  <MenuItem value="live-casino">Live Casino</MenuItem>
                  <MenuItem value="virtual-game">Virtual Game</MenuItem>
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
                  <MenuItem value="papara-key">Papara Key</MenuItem>
                  <MenuItem value="crypto">Crypto Pay</MenuItem>
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
                  <MenuItem value="waiting">Waiting</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                </CustomSelect>
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="operator">{t('pages.reports.user-reports.operator')}</CustomFormLabel>
                <CustomSelect
                  id="operator"
                  name="operator"
                  fullWidth
                  variant="outlined"
                  value={filter?.operator || []}
                  onChange={(e) => updateFilter('operator', e?.target.value)}
                  multiple
                >
                  <MenuItem value="goremaster">goremaster</MenuItem>
                  <MenuItem value="legolas">legolas</MenuItem>
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
