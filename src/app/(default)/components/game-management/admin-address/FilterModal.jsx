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
                  placeholder={t('pages.user-management.user_management_financial_transactions.backoffice_search')}
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.game-management.admin-address.category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  value={filter?.category || "all"}
                  onChange={(e) => updateFilter('category', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="casino">Casino</MenuItem>
                  <MenuItem value="slot">slot</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.game-management.admin-address.updatedAt')}</CustomFormLabel>
               <TimeTabs
                 value={filter?.updatedAt}
                 onChange={e => updateFilter("updatedAt", e)}
                 justify={"start"}
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
                    }}>{t('pages.user-management.user_management_financial_transactions.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
