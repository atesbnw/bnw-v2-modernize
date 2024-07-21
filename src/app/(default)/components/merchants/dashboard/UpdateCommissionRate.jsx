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

function UpdateCommissionRate() {
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
        {t('pages.merchants.dashboard.Update Commission Rate')}
      </Button>

        <SideDialog
          title={t("pages.merchants.dashboard.Update Commission Rate")}
          open={open}
          onClose={() => setOpen(false)}
          content={!loading && (
            <Grid container spacing={1}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel>{t('pages.merchants.dashboard.Current Commission Rate')}</CustomFormLabel>
                <Box>%10</Box>
              </Grid>
              <Grid item sm={12} xs={12}>
              <CustomFormLabel htmlFor="newCommissionRate">{t('pages.merchants.dashboard.New Commission Rate')}</CustomFormLabel>
                <CustomTextField
                  id="balance"
                  name="balance"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={value?.newCommissionRate}
                  onChange={(e) => updateValue('newCommissionRate', e?.target.value)}
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
              }}>{t('i.Save')}</Button>
            </Fragment>
          )}
        />
    </Fragment>
  );
}

export default memo(UpdateCommissionRate);
