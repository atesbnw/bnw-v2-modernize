"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Button, Divider, MenuItem, FormHelperText, Typography} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import PlayerInfoHeader from "@/app/(default)/components/users/PlayerInfoHeader";
import { validationSchema } from './validation';
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const formik = useFormik({
    initialValues: {
      playerId: '',
      registrationDate: '',
      language: '',
      username: '',
      currency: '',
      dealerCode: '',
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
            title={t('menu.Users.Account Info')}
            action={<PlayerInfoHeader/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="playerId">{t('menu.Users.Account Info Page.Player ID')}</CustomFormLabel>
                <CustomTextField
                  id="playerId"
                  name="playerId"
                  variant="outlined"
                  fullWidth
                  value={formik.values.playerId}
                  onChange={formik.handleChange}
                  error={formik.touched.playerId && Boolean(formik.errors.playerId)}
                  helperText={formik.touched.playerId && formik.errors.playerId}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="registrationDate">{t('menu.Users.Account Info Page.Registration Date')}</CustomFormLabel>
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
                <CustomFormLabel htmlFor="language">{t('menu.Users.Account Info Page.Language')}</CustomFormLabel>
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
                <CustomFormLabel htmlFor="username">{t('menu.Users.Account Info Page.Username')}</CustomFormLabel>
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
                <CustomFormLabel htmlFor="currency">{t('menu.Users.Account Info Page.Currency')}</CustomFormLabel>
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
                <CustomFormLabel htmlFor="dealerCode">{t('menu.Users.Account Info Page.Dealer Code')}</CustomFormLabel>
                <CustomTextField
                  id="dealerCode"
                  variant="outlined"
                  fullWidth
                  value={formik.values.dealerCode}
                  onChange={formik.handleChange}
                  error={formik.touched.dealerCode && Boolean(formik.errors.dealerCode)}
                  helperText={formik.touched.dealerCode && formik.errors.dealerCode}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel
                  htmlFor="promotionCode">{t('menu.Users.Account Info Page.Promotion Code')}</CustomFormLabel>
                <CustomTextField
                  id="promotionCode"
                  variant="outlined"
                  fullWidth
                  value={formik.values.promotionCode}
                  onChange={formik.handleChange}
                  error={formik.touched.promotionCode && Boolean(formik.errors.promotionCode)}
                  helperText={formik.touched.promotionCode && formik.errors.promotionCode}
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
