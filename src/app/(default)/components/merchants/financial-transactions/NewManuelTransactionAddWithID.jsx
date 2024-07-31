import React, { memo, useState, useCallback, Fragment, useEffect } from 'react';
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
import IconButton from '@mui/material/IconButton';
import { IconPlus } from '@tabler/icons-react';
import Tooltip from '@mui/material/Tooltip';

function NewManuelTransactionAddWithID({ id }) {
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
    }, 1000);
  }, []);

  useEffect(() => {
    updateValue('id', id);
  }, [id]);

  return (
    <Fragment>

      <Tooltip title={t('pages.user-management.user_management_financial_transactions.NewManuelTransactionAddWithID')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <IconPlus size={15} />
        </IconButton>
      </Tooltip>


      <SideDialog
        title={t('pages.user-management.user_management_financial_transactions.NewManuelTransactionAddWithID')}
        open={open}
        onClose={() => setOpen(false)}
        content={!loading && (
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <CustomFormLabel
                htmlFor="id">{t('pages.user-management.user_management_financial_transactions.associatedTransactionId')}</CustomFormLabel>
              <CustomTextField
                id="id"
                name="id"
                variant="outlined"
                fullWidth
                value={value?.id}
                disabled={true}
                // onChange={(e) => updateValue('id', e?.target.value)}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <CustomFormLabel
                htmlFor="transactionType">{t('pages.user-management.user_management_financial_transactions.transactionType')}</CustomFormLabel>
              <CustomSelect
                id="transactionType"
                name="transactionType"
                fullWidth
                variant="outlined"
                value={value?.transactionType}
                onChange={(e) => updateValue('transactionType', e?.target.value)}
              >
                <MenuItem value="deposit">Deposit</MenuItem>
                <MenuItem value="withdraw">Withdraw</MenuItem>
              </CustomSelect>
            </Grid>
            <Grid item sm={12} xs={12}>
              <CustomFormLabel
                htmlFor="transactionType">{t('pages.user-management.user_management_financial_transactions.transactionCategory')}</CustomFormLabel>
              <CustomSelect
                id="transactionCategory"
                name="transactionCategory"
                fullWidth
                variant="outlined"
                value={value?.transactionCategory}
                onChange={(e) => updateValue('transactionCategory', e?.target.value)}
              >
                <MenuItem
                  value="editBalance">{t('pages.user-management.user_management_financial_transactions.editBalance')}</MenuItem>
                <MenuItem
                  value="addBalance">{t('pages.user-management.user_management_financial_transactions.addBalance')}</MenuItem>
              </CustomSelect>
            </Grid>
            <Grid item sm={12} xs={12}>
              <CustomFormLabel
                htmlFor="balance">{t('pages.user-management.user_management_financial_transactions.balance')}</CustomFormLabel>
              <CustomTextField
                id="balance"
                name="balance"
                variant="outlined"
                type="number"
                fullWidth
                value={value?.balance}
                onChange={(e) => updateValue('balance', e?.target.value)}
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
          <Box className={'w-full h-full flex items-center justify-center'}>
            <CircularProgress />
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth onClick={() => {
              handleSave();
            }}>{t('pages.user-management.user_management_financial_transactions.NewManuelTransactionAddWithID')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(NewManuelTransactionAddWithID);