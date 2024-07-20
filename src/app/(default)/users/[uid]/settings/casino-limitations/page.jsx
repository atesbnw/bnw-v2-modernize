"use client";
import React, {memo, useState, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Button, MenuItem, FormHelperText, InputAdornment} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import Stack from "@mui/material/Stack";
import TitleBar from "@/app/components/TitleBar";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import { validationSchema } from './validation';

function Page() {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const toggleReadOnly = () => setIsReadOnly(!isReadOnly);

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
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Stack direction={'row'} justifyContent={'center'}>
            <TitleBar
              title={t('menu.Users.Settings Menu.Casino Limitations')}
            />
            <Button variant="outlined" onClick={toggleReadOnly} style={{width:'200px', height:"30px"}}>
              {isReadOnly ? 'Make Editable' : 'Make Read Only'}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} mt={0}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item sm={4} xs={12} mt={0}>
                <CustomFormLabel htmlFor="category">{t('pages.user-management.user_management_settings.Category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  variant="outlined"
                  readOnly={isReadOnly}
                  value={formik.values.category}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Casino">Casino</MenuItem>
                  <MenuItem value="Spor">Spor</MenuItem>
                </CustomSelect>
                {formik.errors.category && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.category}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item sm={4} xs={12} mt={0}>
                <CustomFormLabel htmlFor="provider">{t('pages.user-management.user_management_settings.Provider')}</CustomFormLabel>
                <CustomSelect
                  id="provider"
                  name="provider"
                  fullWidth
                  variant="outlined"

                  readOnly={isReadOnly}
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
              <Grid item sm={4} xs={12} mt={0}>
                <CustomFormLabel htmlFor="game">{t('pages.user-management.user_management_settings.Game')}</CustomFormLabel>
                <CustomSelect
                  id="game"
                  name="game"
                  fullWidth
                  variant="outlined"
                  readOnly={isReadOnly}
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
              <Grid item sm={4} xs={12} mt={0}>
                <CustomFormLabel htmlFor="limitDuration">{t('pages.user-management.user_management_settings.Limit Duration')}</CustomFormLabel>
                <CustomSelect
                  id="limitDuration"
                  name="limitDuration"
                  fullWidth
                  variant="outlined"
                  readOnly={isReadOnly}
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
              <Grid item sm={4} xs={12} mt={0}>
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
                  readOnly={isReadOnly}
                />
              </Grid>
              <Grid item sm={4} xs={12} mt={0}>
                <CustomFormLabel htmlFor="blockAll">{t('pages.user-management.user_management_settings.Block All')}</CustomFormLabel>
                <CustomSelect
                  id="blockAll"
                  name="blockAll"
                  fullWidth
                  variant="outlined"
                  readOnly={isReadOnly}
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
                  readOnly={isReadOnly}
                />

              </Grid>
              <Grid item container xs={12} justifyContent="right" mt={3}>
                <Button variant="contained" sx={{mr: 1,}} type="submit">
                  {t('i.Save')}
                </Button>
                <Button variant="outlined" color="secondary">
                  {t('i.Cancel')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default memo(Page);
