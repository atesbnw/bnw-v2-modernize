"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {
  Grid,
  Button,
  Divider,
  MenuItem,
  FormHelperText,
  Typography,
  FormGroup,
  FormControlLabel,
  Stack, Box
} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import { validationSchema } from './validation';
import UserIcons from "@/app/(default)/components/users/UserIcons";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import Link from "next/link";

function Page() {

  const formik = useFormik({
    initialValues: {
      accountStatus: 'Durdurulmus',
      userRole: 'Üye',
      userSegment: 'Standart Üye',
      approvalStatus: 'Beklemede',
      loyaltySystem: 'Elle',
      loyaltyStatus: 'Sadık Üye'
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <Grid container mt={1} mb={2} spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">{t('menu.Users.State and Role')}</Typography>
        </Grid>
        <UserIcons/>
      </Grid>

      <Divider/>

      <Grid mt={1} xs="auto">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} mb={3}>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="accountStatus">{t('menu.Users.Status and Role Page.Account Status')}</CustomFormLabel>
              <CustomSelect
                id="accountStatus"
                name="accountStatus"
                fullWidth
                variant="outlined"
                value={formik.values.accountStatus}
                onChange={formik.handleChange}
              >
                <MenuItem value="Durdurulmus">Durdurulmuş</MenuItem>
              </CustomSelect>
              {formik.errors.accountStatus && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.accountStatus}{' '}
                </FormHelperText>
              )}

              <CustomFormLabel htmlFor="userRole">{t('menu.Users.Status and Role Page.User Role')}</CustomFormLabel>
              <CustomSelect
                id="userRole"
                name="userRole"
                fullWidth
                variant="outlined"
                value={formik.values.userRole}
                onChange={formik.handleChange}
              >
                <MenuItem value="Üye">Üye</MenuItem>
              </CustomSelect>
              {formik.errors.userRole && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.userRole}{' '}
                </FormHelperText>
              )}

              <CustomFormLabel htmlFor="userSegment">{t('menu.Users.Status and Role Page.User Segment')}</CustomFormLabel>
              <CustomSelect
                id="userSegment"
                name="userSegment"
                fullWidth
                variant="outlined"
                value={formik.values.userSegment}
                onChange={formik.handleChange}
              >
                <MenuItem value="Standart Üye">Standart Üye</MenuItem>
              </CustomSelect>
              {formik.errors.userSegment && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.userSegment}{' '}
                </FormHelperText>
              )}


            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="approvalStatus">{t('menu.Users.Status and Role Page.Approval Status')}</CustomFormLabel>
              <CustomSelect
                id="approvalStatus"
                name="approvalStatus"
                fullWidth
                variant="outlined"
                value={formik.values.approvalStatus}
                onChange={formik.handleChange}
              >
                <MenuItem value="Beklemede">Beklemede</MenuItem>
              </CustomSelect>
              {formik.errors.approvalStatus && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.approvalStatus}{' '}
                </FormHelperText>
              )}

              <CustomFormLabel htmlFor="loyaltySystem">{t('menu.Users.Status and Role Page.Loyalty System')}</CustomFormLabel>
              <CustomSelect
                id="loyaltySystem"
                name="loyaltySystem"
                fullWidth
                variant="outlined"
                value={formik.values.loyaltySystem}
                onChange={formik.handleChange}
              >
                <MenuItem value="Elle">Elle</MenuItem>
              </CustomSelect>
              {formik.errors.loyaltySystem && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.loyaltySystem}{' '}
                </FormHelperText>
              )}

              <CustomFormLabel htmlFor="loyaltyStatus">{t('menu.Users.Status and Role Page.Loyalty Status')}</CustomFormLabel>
              <CustomSelect
                id="loyaltyStatus"
                name="loyaltyStatus"
                fullWidth
                variant="outlined"
                value={formik.values.loyaltyStatus}
                onChange={formik.handleChange}
              >
                <MenuItem value="Sadık Üye">Sadık Üye</MenuItem>
              </CustomSelect>
              {formik.errors.loyaltyStatus && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.loyaltyStatus}{' '}
                </FormHelperText>
              )}



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
