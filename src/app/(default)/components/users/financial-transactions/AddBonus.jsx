import React, { memo, useState, useCallback, Fragment } from 'react';
import Button from '@mui/material/Button';
import { t } from 'i18next';
import SideDialog from '@/app/components/shared/SideDialog';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function AddBonus() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({});
  const updateValue = useCallback((field, value) => {
    setValue(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSave = useCallback(() => {
    setLoading(true);

    setValue({});

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000)
  }, []);

  return (
    <Fragment>
      <Button variant={'contained'} onClick={() => setOpen(true)}>
        {t('menu.Financial Transactions.Add Bonus')}
      </Button>

        <SideDialog
          title={t("pages.user-management.user_management_financial_transactions.addUserBonus")}
          open={open}
          onClose={() => setOpen(false)}
          content={!loading && (
            <Grid container spacing={1}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="bonusType">{t('pages.user-management.user_management_financial_transactions.bonusType')}</CustomFormLabel>
                <CustomSelect
                  id="bonusType"
                  name="bonusType"
                  fullWidth
                  variant="outlined"
                  value={value?.bonusType}
                  onChange={(e) => updateValue('bonusType', e?.target.value)}
                >
                  <MenuItem value="investment">{t('pages.user-management.user_management_financial_transactions.investment')}</MenuItem>
                  {/*<MenuItem value="withdraw">Withdraw</MenuItem>*/}
                </CustomSelect>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="transferBonus">{t('pages.user-management.user_management_financial_transactions.transferBonus')}</CustomFormLabel>
                <CustomSelect
                  id="transferBonus"
                  name="transferBonus"
                  fullWidth
                  variant="outlined"
                  value={value?.transferBonus}
                  onChange={(e) => updateValue('transferBonus', e?.target.value)}
                >
                  <MenuItem value="welcome-bonus">Welcome Bonus</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="amount">{t('pages.user-management.user_management_financial_transactions.amount')}</CustomFormLabel>
                <CustomTextField
                  id="amount"
                  name="amount"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={value?.amount}
                  onChange={(e) => updateValue('amount', e?.target.value)}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="balance">{t('pages.user-management.user_management_financial_transactions.notes')}</CustomFormLabel>
                <CustomTextField
                  id="notes"
                  name="notes"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                  value={value?.notes}
                  onChange={(e) => updateValue('notes', e?.target.value)}
                />
              </Grid>
            </Grid>
          ) || (
            <Box className={"w-full h-full flex items-center justify-center"}>
              <CircularProgress />
            </Box>
          )}
          actionButtons={(
            <Fragment>
              <Button fullWidth onClick={() => {
                handleSave()
              }}>{t('menu.Financial Transactions.Add Bonus')}</Button>
            </Fragment>
          )}
        />
    </Fragment>
  );
}

export default memo(AddBonus);
