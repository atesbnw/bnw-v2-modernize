"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Button, Divider, MenuItem, FormHelperText, Typography} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import MerchantIcons from "@/app/(default)/components/merchants/MerchantIcons";
import { validationSchema } from './validation';
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const formik = useFormik({
    initialValues: {
      merchantId: '',
      registrationDate: '',
      language: '',
      username: '',
      currency: '',
      merchantCode: '',
      promotionCode: ''
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
            title={t('pages.merchants.dashboard.Account Info')}
            action={<MerchantIcons/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="merchantId">{t('pages.merchants.dashboard.Account Info Page.Merchant ID')}</CustomFormLabel>
                <CustomTextField
                  id="merchantId"
                  name="merchantId"
                  variant="outlined"
                  fullWidth
                  value={formik.values.merchantId}
                  onChange={formik.handleChange}
                  error={formik.touched.merchantId && Boolean(formik.errors.merchantId)}
                  helperText={formik.touched.merchantId && formik.errors.merchantId}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="username">{t('pages.merchants.dashboard.Account Info Page.Username')}</CustomFormLabel>
                <CustomTextField
                  id="username"
                  variant="outlined"
                  fullWidth
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="registrationDate">{t('pages.merchants.dashboard.Account Info Page.Registration Date')}</CustomFormLabel>
                <CustomTextField
                  id="registrationDate"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.registrationDate}
                  onChange={formik.handleChange}
                  error={formik.touched.registrationDate && Boolean(formik.errors.registrationDate)}
                  helperText={formik.touched.registrationDate && formik.errors.registrationDate}
                />
              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="currency">{t('pages.merchants.dashboard.Account Info Page.Currency')}</CustomFormLabel>
                <CustomSelect
                  id="currency"
                  name="currency"
                  fullWidth
                  variant="outlined"
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="TRY">TRY</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </CustomSelect>
                {formik.errors.currency && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.currency}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="language">{t('pages.merchants.dashboard.Account Info Page.Language')}</CustomFormLabel>
                <CustomSelect
                  id="language"
                  name="language"
                  fullWidth
                  variant="outlined"
                  value={formik.values.language}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Türkçe">Türkçe</MenuItem>
                </CustomSelect>
                {formik.errors.language && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.language}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="merchantCode">{t('pages.merchants.dashboard.Account Info Page.Merchant Code')}</CustomFormLabel>
                <CustomTextField
                  id="merchantCode"
                  variant="outlined"
                  fullWidth
                  value={formik.values.merchantCode}
                  onChange={formik.handleChange}
                  error={formik.touched.merchantCode && Boolean(formik.errors.merchantCode)}
                  helperText={formik.touched.merchantCode && formik.errors.merchantCode}
                />
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
