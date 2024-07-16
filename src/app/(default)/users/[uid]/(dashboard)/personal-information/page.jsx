"use client";
import React, {memo, useState, useCallback, Fragment} from 'react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {Grid, Avatar, Button, Divider, MenuItem, FormHelperText} from '@mui/material';
import Typography from '@mui/material/Typography';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import { validationSchema } from './validation';
import PlayerInfoHeader from "@/app/(default)/components/users/PlayerInfoHeader";

function Page() {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      documentNo: '',
      documentType: '',
      birthDate: '',
      birthPlace: '',
      genderSelect: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <PlayerInfoHeader>
        <Typography variant="h4" component="div">{t('menu.Users.Personal Information')}</Typography>
      </PlayerInfoHeader>

      <Grid container mt={1} spacing={3}>
        <Grid item>
            <Avatar variant='rounded' src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} alt="Remy Sharp" />
        </Grid>
        <Grid item xs container spacing={2} direction="column" justifyContent="center" >
            <Grid item>
                <Typography variant="h4" >John Doe - johndoerobot</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" sx={{mr:1}}>{t('menu.Users.Player Info Page.Edit Image')}</Button>
                <Button variant="outlined"  size="small">{t('menu.Users.Player Info Page.Remove Image')}</Button>
            </Grid>
        </Grid>
      </Grid>
      <Grid mt={3}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} mb={3}>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="firstname">{t('menu.Users.Player Info Page.First Name')}</CustomFormLabel>
              <CustomTextField
                id="firstname"
                name="firstname"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
              />

              <CustomFormLabel htmlFor="lastname">{t('menu.Users.Player Info Page.Last Name')}</CustomFormLabel>
              <CustomTextField
                id="lastname"
                variant="outlined"
                fullWidth
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
              />

              <CustomFormLabel htmlFor="documentNo">{t('menu.Users.Player Info Page.Document No')}</CustomFormLabel>
              <CustomTextField
                id="documentNo"
                variant="outlined"
                fullWidth
                value={formik.values.documentNo}
                onChange={formik.handleChange}
                error={formik.touched.documentNo && Boolean(formik.errors.documentNo)}
                helperText={formik.touched.documentNo && formik.errors.documentNo}
              />

              <CustomFormLabel htmlFor="documentType">{t('menu.Users.Player Info Page.Document Type')}</CustomFormLabel>
              <CustomTextField
                id="documentType"
                variant="outlined"
                fullWidth
                value={formik.values.documentType}
                onChange={formik.handleChange}
                error={formik.touched.documentType && Boolean(formik.errors.documentType)}
                helperText={formik.touched.documentType && formik.errors.documentType}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomFormLabel htmlFor="birthDate">{t('menu.Users.Player Info Page.Date of Birth')}</CustomFormLabel>
              <CustomTextField
                id="birthDate"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.birthDate}
                onChange={formik.handleChange}
                error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                helperText={formik.touched.birthDate && formik.errors.birthDate}
              />

              <CustomFormLabel htmlFor="birthPlace">{t('menu.Users.Player Info Page.Birth Place')}</CustomFormLabel>
              <CustomTextField
                id="birthPlace"
                variant="outlined"
                fullWidth
                value={formik.values.birthPlace}
                onChange={formik.handleChange}
                error={formik.touched.birthPlace && Boolean(formik.errors.birthPlace)}
                helperText={formik.touched.birthPlace && formik.errors.birthPlace}
              />

              <CustomFormLabel htmlFor="genderSelect">{t('menu.Users.Player Info Page.Gender')}</CustomFormLabel>
              <CustomSelect
                id="genderSelect"
                name="genderSelect"
                fullWidth
                variant="outlined"
                value={formik.values.genderSelect}
                onChange={formik.handleChange}
              >
                <MenuItem value="Female">Male</MenuItem>
                <MenuItem value="Male">Female</MenuItem>
              </CustomSelect>
              {formik.errors.genderSelect && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {' '}
                  {formik.errors.genderSelect}{' '}
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
