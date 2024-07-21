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
import PlayerInfoHeader from "@/app/(default)/components/users/PlayerInfoHeader";
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const formik = useFormik({
    initialValues: {
      accountStatus: 'Suspended',
      userRole: 'Member'
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
            title={t('pages.merchants.dashboard.Status and Role')}
            action={<PlayerInfoHeader/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}}  htmlFor="accountStatus">{t('pages.merchants.dashboard.Status and Role Page.Account Status')}</CustomFormLabel>
                <CustomSelect
                  id="accountStatus"
                  name="accountStatus"
                  fullWidth
                  variant="outlined"
                  value={formik.values.accountStatus}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Suspended">Suspended</MenuItem>
                </CustomSelect>
                {formik.errors.accountStatus && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.accountStatus}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}}  htmlFor="userRole">{t('pages.merchants.dashboard.Status and Role Page.User Role')}</CustomFormLabel>
                <CustomSelect
                  id="userRole"
                  name="userRole"
                  fullWidth
                  variant="outlined"
                  value={formik.values.userRole}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Member">Member</MenuItem>
                </CustomSelect>
                {formik.errors.userRole && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.userRole}{' '}
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
