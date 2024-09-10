import React, {memo, useState, useCallback, Fragment, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import { useFormik } from 'formik';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import {FormHelperText, InputAdornment, MenuItem} from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import {validationSchema} from "@/app/(default)/users/[uid]/settings/casino-limitations/validation";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";

function ActionModal({id, data}) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      category: '',
      provider: '',
      game: '',
      limitDuration: '',
      limitAmount: '',
      language: '',
      promotionCode: '',
      description: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <Button variant="contained" onClick={() => setOpen(true)}>
        {t('pages.user-management.user_management_settings.Create Limit')}
      </Button>

      <SideDialog
        title={t('pages.user-management.user_management_settings.Create Limit')}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1} mb={2}>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="category">{t('pages.user-management.user_management_settings.Category')}</CustomFormLabel>
                  <CustomSelect
                    id="category"
                    name="category"
                    fullWidth
                    variant="outlined"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="casino">Casino</MenuItem>
                    <MenuItem value="live-casino">Live Casino</MenuItem>
                    <MenuItem value="virtual-games">Virtual Games</MenuItem>
                  </CustomSelect>
                  {formik.errors.category && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.category}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="provider">{t('pages.user-management.user_management_settings.Provider')}</CustomFormLabel>
                  <CustomSelect
                    id="provider"
                    name="provider"
                    fullWidth
                    variant="outlined"
                    value={formik.values.provider}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Pragmatic">Pragmatic</MenuItem>
                    <MenuItem value="EGT">EGT</MenuItem>
                  </CustomSelect>
                  {formik.errors.provider && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.provider}{' '}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="game">{t('pages.user-management.user_management_settings.Game')}</CustomFormLabel>
                  <CustomSelect
                    id="game"
                    name="game"
                    fullWidth
                    variant="outlined"
                    value={formik.values.game}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Sweet Bonanza">Sweet Bonanza</MenuItem>
                    <MenuItem value="40 Burning Hot">40 Burning Hot</MenuItem>
                  </CustomSelect>
                  {formik.errors.game && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.game}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="limitDuration">{t('pages.user-management.user_management_settings.Limit Duration')}</CustomFormLabel>
                  <CustomSelect
                    id="limitDuration"
                    name="limitDuration"
                    fullWidth
                    variant="outlined"
                    value={formik.values.limitDuration}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Yearly">Yearly</MenuItem>
                    <MenuItem value="Monthly">Monthly</MenuItem>
                  </CustomSelect>
                  {formik.errors.limitDuration && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.limitDuration}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="limitAmount">{t('pages.user-management.user_management_settings.Limit Amount')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="limitAmount"
                    name="limitAmount"
                    type="number"
                    fullWidth
                    value={formik.values.limitAmount}
                    onChange={formik.handleChange}
                    error={formik.touched.limitAmount && Boolean(formik.errors.limitAmount)}
                    helperText={formik.touched.limitAmount && formik.errors.limitAmount}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="blockAll">{t('pages.user-management.user_management_settings.Block All')}</CustomFormLabel>
                  <CustomSelect
                    id="blockAll"
                    name="blockAll"
                    fullWidth
                    variant="outlined"
                    value={formik.values.blockAll}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </CustomSelect>
                  {formik.errors.blockAll && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.blockAll}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CustomFormLabel htmlFor="description">{t('pages.user-management.user_management_settings.Description')}</CustomFormLabel>
                  <CustomTextField
                    id="description"
                    fullWidth
                    multiline
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
          )}
        actionButtons={(
        <Fragment>
            <Button
              fullWidth
              variant='contained'
              onClick={formik.handleSubmit}
            >{t('i.Save')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
