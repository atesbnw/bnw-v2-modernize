"use client";
import React, {Fragment, memo, useState} from 'react';
import { useFormik } from 'formik';
import {t} from "i18next";
import { styled } from '@mui/material/styles';
import {FormControlLabel, MenuItem, Button} from "@mui/material";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import { validationSchema } from './validation';
import {CloudUpload} from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function AddDocumentModal() {

  const formik = useFormik({
    initialValues: {
      documentType:'',
      note:'',
      file: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <CustomFormLabel htmlFor="documentType">{t('pages.user-management.user_management_dashboard.Docs Page.Document Type')}</CustomFormLabel>
      <CustomSelect
        id="documentType"
        name="documentType"
        fullWidth
        variant="outlined"
        value={formik.values.documentType}
        onChange={formik.handleChange}
      >
        <MenuItem value="Passport">Passport</MenuItem>
        <MenuItem value="Driving License">Driving License</MenuItem>
      </CustomSelect>

      <CustomFormLabel htmlFor="file">{t('pages.user-management.user_management_dashboard.Docs Page.Document File')}</CustomFormLabel>
      <Button
        fullWidth
        sx={{height:'6rem'}}
        component="label"
        role={undefined}
        color='secondary'
        variant="outlined"
        tabIndex={-1}
        startIcon={<CloudUpload />}
      >
        Upload file
        <VisuallyHiddenInput name="file" id="file" type="file" />
      </Button>

      <CustomFormLabel htmlFor="note">{t('pages.user-management.user_management_dashboard.Docs Page.Notes')}</CustomFormLabel>
      <CustomTextField
        mb={3}
        name="note"
        id="note"
        variant="outlined"
        fullWidth
        multiline
        value={formik.values.note}
        onChange={formik.handleChange}
      />

      <FormControlLabel sx={{mt:2}}
        control={<CustomCheckbox value="email" name="communicationPreferences" onChange={formik.handleChange} />}
        label={t('pages.user-management.user_management_dashboard.Docs Page.Approve Document')}
      />
    </Fragment>
  );
}

export default memo(AddDocumentModal);
