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
import TimeTabs from "@/app/components/shared/TimeTabs";

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button color="primary" startIcon={<IconFilter width={18} />} onClick={() => setOpen(true)}>
        {t('i.Filter')}
      </Button>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('pages.user-management.user_management_financial_transactions.clearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter()
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t("pages.user-management.user_management_financial_transactions.filter")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid item xs={12}>
              <CustomFormLabel
                htmlFor="transactionDate">{t('pages.user-management.user_management_financial_transactions.transactionDate')}</CustomFormLabel>
              <TimeTabs justify={"full"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
            </Grid>
            <Grid container spacing={1} mb={2}>
              {/*<Grid item sm={6} xs={12}>*/}
              {/*  <CustomFormLabel*/}
              {/*    htmlFor="searchText">{t('pages.user-management.user_management_financial_transactions.search')}</CustomFormLabel>*/}
              {/*  <CustomTextField*/}
              {/*    id="searchText"*/}
              {/*    name="searchText"*/}
              {/*    variant="outlined"*/}
              {/*    fullWidth*/}
              {/*    value={filter?.searchText}*/}
              {/*    onChange={(e) => updateFilter('searchText', e?.target.value)}*/}
              {/*  />*/}
              {/*</Grid>*/}
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="balance">{t('pages.user-management.user_management_financial_transactions.transactionAmount')}</CustomFormLabel>
                <CustomTextField
                  id="balance"
                  name="balance"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={filter?.balance}
                  onChange={(e) => updateFilter('balance', e?.target.value)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.user-management.user_management_financial_transactions.transactionType')}</CustomFormLabel>
                <CustomSelect
                  id="transactionType"
                  name="transactionType"
                  fullWidth
                  variant="outlined"
                  value={filter?.transactionType || 'all'}
                  onChange={(e) => updateFilter('transactionType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="deposit">Deposit</MenuItem>
                  <MenuItem value="withdraw">Withdraw</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.user-management.user_management_financial_transactions.category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  variant="outlined"
                  value={filter?.category || 'all'}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara">Papara</MenuItem>
                  <MenuItem value="casino">Casino</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="subcategory">{t('pages.user-management.user_management_financial_transactions.subcategory')}</CustomFormLabel>
                <CustomSelect
                  id="subcategory"
                  name="subcategory"
                  fullWidth
                  variant="outlined"
                  value={filter?.subcategory || 'all'}
                  onChange={(e) => updateFilter('subcategory', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="papara-key">Papara Key</MenuItem>
                  <MenuItem value="egt">EGT</MenuItem>
                </CustomSelect>
              </Grid>
              {/*<Grid item sm={6} xs={12}>*/}
              {/*  <CustomFormLabel*/}
              {/*    htmlFor="transactionFlow">{t('pages.user-management.user_management_financial_transactions.transactionFlow')}</CustomFormLabel>*/}
              {/*  <CustomSelect*/}
              {/*    id="transactionFlow"*/}
              {/*    name="transactionFlow"*/}
              {/*    fullWidth*/}
              {/*    variant="outlined"*/}
              {/*    value={filter?.transactionFlow || 'all'}*/}
              {/*    onChange={(e) => updateFilter('transactionFlow', e?.target.value)}*/}
              {/*  >*/}
              {/*    <MenuItem value="all">All</MenuItem>*/}
              {/*    <MenuItem value="req">Request</MenuItem>*/}
              {/*    <MenuItem value="bet">Bet</MenuItem>*/}
              {/*  </CustomSelect>*/}
              {/*</Grid>*/}
              <Grid item sm={6} xs={12}>
                <CustomFormLabel
                  htmlFor="status">{t('pages.user-management.user_management_financial_transactions.status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  variant="outlined"
                  value={filter?.status || 'all'}
                  onChange={(e) => updateFilter('status', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="confirmed">Confirmed</MenuItem>
                </CustomSelect>
              </Grid>
              {/*<Grid item sm={6} xs={12}>*/}
              {/*  <CustomFormLabel*/}
              {/*    htmlFor="device">{t('pages.user-management.user_management_financial_transactions.device')}</CustomFormLabel>*/}
              {/*  <CustomSelect*/}
              {/*    id="device"*/}
              {/*    name="device"*/}
              {/*    fullWidth*/}
              {/*    variant="outlined"*/}
              {/*    value={filter?.device || 'all'}*/}
              {/*    onChange={(e) => updateFilter('device', e?.target.value)}*/}
              {/*  >*/}
              {/*    <MenuItem value="all">All</MenuItem>*/}
              {/*  </CustomSelect>*/}
              {/*</Grid>*/}


            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth onClick={() => {
              onConfirm()
              setOpen(false);
            }}>{t('pages.user-management.user_management_financial_transactions.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
