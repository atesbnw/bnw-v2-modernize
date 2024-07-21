"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {
  Grid,
  Button,
  MenuItem,
  FormHelperText,
  Typography,
  FormControlLabel,
  Stack, Box
} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import { validationSchema } from './validation';
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import PlayerInfoHeader from "@/app/(default)/components/users/PlayerInfoHeader";
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const formik = useFormik({
    initialValues: {
      mobilePhone:'',
      email:'',
      communicationPreferences: [],
      country:'',
      region:'',
      city:'',
      address:'',
      postalCode:''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.merchants.dashboard.Contact Info')}
            action={<PlayerInfoHeader/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}}  htmlFor="mobilePhone">{t('pages.merchants.dashboard.Contact Info Page.Mobile Phone')}</CustomFormLabel>
                <CustomTextField
                  id="mobilePhone"
                  name="mobilePhone"
                  variant="outlined"
                  fullWidth
                  value={formik.values.mobilePhone}
                  onChange={formik.handleChange}
                  error={formik.touched.mobilePhone && Boolean(formik.errors.mobilePhone)}
                  helperText={formik.touched.mobilePhone && formik.errors.mobilePhone}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel  sx={{mt: 0}}  htmlFor="email">{t('pages.merchants.dashboard.Contact Info Page.Email')}</CustomFormLabel>
                <CustomTextField
                  id="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="country">{t('pages.merchants.dashboard.Contact Info Page.Country')}</CustomFormLabel>
                <CustomSelect
                  id="country"
                  name="country"
                  fullWidth
                  variant="outlined"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Turkiye">Turkiye</MenuItem>
                  <MenuItem value="Cyprus">Cyprus</MenuItem>
                </CustomSelect>
                {formik.errors.country && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.country}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="city">{t('pages.merchants.dashboard.Contact Info Page.City')}</CustomFormLabel>
                <CustomSelect
                  id="city"
                  name="city"
                  fullWidth
                  variant="outlined"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Istanbul">Istanbul</MenuItem>
                  <MenuItem value="Ankara">Ankara</MenuItem>
                </CustomSelect>
                {formik.errors.city && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.city}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="region">{t('pages.merchants.dashboard.Contact Info Page.Region')}</CustomFormLabel>
                <CustomTextField
                  id="region"
                  variant="outlined"
                  fullWidth
                  value={formik.values.region}
                  onChange={formik.handleChange}
                  error={formik.touched.region && Boolean(formik.errors.region)}
                  helperText={formik.touched.region && formik.errors.region}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="address">{t('pages.merchants.dashboard.Contact Info Page.Address')}</CustomFormLabel>
                <CustomTextField
                  id="address"
                  variant="outlined"
                  fullWidth
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="postalCode">{t('pages.merchants.dashboard.Contact Info Page.Postal Code')}</CustomFormLabel>
                <CustomTextField
                  id="postalCode"
                  variant="outlined"
                  fullWidth
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                  helperText={formik.touched.postalCode && formik.errors.postalCode}
                />
              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="communicationPreferences">{t('pages.merchants.dashboard.Contact Info Page.Communication Preferences')}</CustomFormLabel>
                <Stack direction="row" spacing={2}>
                  <Box mt="-10px" mb={3}>
                    <FormControlLabel
                      control={<CustomCheckbox value="email" name="communicationPreferences" onChange={formik.handleChange} />}
                      label={t('pages.merchants.dashboard.Contact Info Page.Email')}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox value="phone" name="communicationPreferences" onChange={formik.handleChange} />}
                      label={t('pages.merchants.dashboard.Contact Info Page.Mobile Phone')}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox value="sms" name="communicationPreferences" onChange={formik.handleChange} />}
                      label={t('pages.merchants.dashboard.Contact Info Page.SMS')}
                    />
                  </Box>
                </Stack>
              </Grid>
              <Grid item container xs={12} justifyContent="right" mt={3}>
                <Button variant="contained" sx={{mr: 1}} type="submit">
                  {t('i.Save')}
                </Button>
                <Button variant="outlined" color="secondary">
                  {t('i.Cancel')}
                </Button>
              </Grid>
            </Grid>
          </ParentCard>
        </Grid>
      </form>
    </Fragment>

  );
}

export default memo(Page);
