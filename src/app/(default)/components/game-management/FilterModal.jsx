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
            resetFilter && resetFilter();
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t('pages.user-management.user_management_financial_transactions.filter')}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.user-management.user_management_financial_transactions.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.user-management.game-management.Locked')}</CustomFormLabel>
                <CustomSwitch
                  onChange={(e) => {
                    if(e?.target?.checked) {
                      updateFilter('Desktop', false);
                      updateFilter('Mobile', false);
                    }
                    updateFilter('Locked', e?.target?.checked);
                  }}
                  checked={filter?.Locked}
                />
              </Grid>
              {filter?.Locked ? (
                <></>
              ) : (
                <Fragment>
                  <Grid item sm={4} xs={12}>
                    <CustomFormLabel
                      htmlFor="transactionDate">{t('pages.user-management.game-management.Desktop')}</CustomFormLabel>

                    <CustomSwitch
                      onChange={(e) => !filter?.Locked && updateFilter('Desktop', e?.target?.checked)}
                      checked={filter?.Locked!==true  && filter?.Desktop}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <CustomFormLabel
                      htmlFor="balance">{t('pages.user-management.game-management.Mobile')}</CustomFormLabel>
                    <CustomSwitch
                      onChange={(e) => !filter?.Locked && updateFilter('Mobile', e?.target?.checked)}
                      checked={filter?.Locked!==true  && filter?.Mobile}
                    />
                  </Grid>
                </Fragment>
              )}


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
                    }}>{t('pages.user-management.user_management_financial_transactions.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
