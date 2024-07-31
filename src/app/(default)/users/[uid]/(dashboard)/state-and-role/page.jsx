"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {
  Grid,
  Button,
  MenuItem,
  FormHelperText,
  Typography
} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import { validationSchema } from './validation';
import UserIcons from "@/app/(default)/components/users/UserIcons";
import ParentCard from "@/app/components/shared/ParentCard";

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
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12} className={"mt-0"}>
          <ParentCard
            title={t('pages.user-management.user_management_dashboard.Status and Role Page.Status and Role')}
            action={<UserIcons/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}}  htmlFor="accountStatus">{t('pages.user-management.user_management_dashboard.Status and Role Page.Account Status')}</CustomFormLabel>
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
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}}  htmlFor="userRole">{t('pages.user-management.user_management_dashboard.Status and Role Page.User Role')}</CustomFormLabel>
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
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="userSegment">{t('pages.user-management.user_management_dashboard.Status and Role Page.User Segment')}</CustomFormLabel>
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
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="approvalStatus">{t('pages.user-management.user_management_dashboard.Status and Role Page.Approval Status')}</CustomFormLabel>
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
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="loyaltySystem">{t('pages.user-management.user_management_dashboard.Status and Role Page.Loyalty System')}</CustomFormLabel>
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
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel htmlFor="loyaltyStatus">{t('pages.user-management.user_management_dashboard.Status and Role Page.Loyalty Status')}</CustomFormLabel>
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
