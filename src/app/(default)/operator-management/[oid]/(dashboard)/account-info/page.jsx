"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Button, Divider, MenuItem, FormHelperText, Typography} from '@mui/material';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import OperatorIcons from "@/app/(default)/components/operator-management/OperatorIcons";
import { validationSchema } from './validation';
import ParentCard from "@/app/components/shared/ParentCard";

function Page() {

  const formik = useFormik({
    initialValues: {
      operatorId: '',
      registrationDate: '',
      username: '',
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
            title={t('pages.operator-management.dashboard.Account Info')}
            action={<OperatorIcons/>}
          >
            <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="operatorId">{t('pages.operator-management.dashboard.Account Info Page.Operator ID')}</CustomFormLabel>
                <CustomTextField
                  id="operatorId"
                  name="operatorId"
                  variant="outlined"
                  fullWidth
                  value={formik.values.operatorId}
                  onChange={formik.handleChange}
                  error={formik.touched.operatorId && Boolean(formik.errors.operatorId)}
                  helperText={formik.touched.operatorId && formik.errors.operatorId}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <CustomFormLabel sx={{mt: 0}} htmlFor="username">{t('pages.operator-management.dashboard.Account Info Page.Username')}</CustomFormLabel>
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
                <CustomFormLabel htmlFor="registrationDate">{t('pages.operator-management.dashboard.Account Info Page.Registration Date')}</CustomFormLabel>
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
