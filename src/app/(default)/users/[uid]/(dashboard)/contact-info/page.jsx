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
      <PlayerInfoHeader>
        <Typography variant="h4" component="div">{t('menu.Users.Contact Info')}</Typography>
      </PlayerInfoHeader>

      <Grid mt={1} xs="auto">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} mb={3}>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="mobilePhone">{t('menu.Users.Contact Info Page.Mobile Phone')}</CustomFormLabel>
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
              <CustomFormLabel htmlFor="email">{t('menu.Users.Contact Info Page.Email')}</CustomFormLabel>
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
              <CustomFormLabel htmlFor="communicationPreferences">{t('menu.Users.Contact Info Page.Communication Preferences')}</CustomFormLabel>
              <Stack direction="row" spacing={2}>
                <Box mt="-10px" mb={3}>
                  <FormControlLabel
                    control={<CustomCheckbox value="email" name="communicationPreferences" onChange={formik.handleChange} />}
                    label={t('menu.Users.Contact Info Page.Email')}
                  />
                  <FormControlLabel
                    control={<CustomCheckbox value="phone" name="communicationPreferences" onChange={formik.handleChange} />}
                    label={t('menu.Users.Contact Info Page.Mobile Phone')}
                  />
                  <FormControlLabel
                    control={<CustomCheckbox value="sms" name="communicationPreferences" onChange={formik.handleChange} />}
                    label={t('menu.Users.Contact Info Page.SMS')}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="country">{t('menu.Users.Contact Info Page.Country')}</CustomFormLabel>
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

              <CustomFormLabel htmlFor="region">{t('menu.Users.Contact Info Page.Region')}</CustomFormLabel>
              <CustomTextField
                id="region"
                variant="outlined"
                fullWidth
                value={formik.values.region}
                onChange={formik.handleChange}
                error={formik.touched.region && Boolean(formik.errors.region)}
                helperText={formik.touched.region && formik.errors.region}
              />

              <CustomFormLabel htmlFor="city">{t('menu.Users.Contact Info Page.City')}</CustomFormLabel>
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

              <CustomFormLabel htmlFor="address">{t('menu.Users.Contact Info Page.Address')}</CustomFormLabel>
              <CustomTextField
                id="address"
                variant="outlined"
                fullWidth
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />

              <CustomFormLabel htmlFor="postalCode">{t('menu.Users.Contact Info Page.Postal Code')}</CustomFormLabel>
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
            <Grid item container xs={12} justifyContent="right">
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
    </Fragment>
  );
}

export default memo(Page);
