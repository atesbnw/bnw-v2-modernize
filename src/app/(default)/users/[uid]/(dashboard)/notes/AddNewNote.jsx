"use client";
import React, {Fragment, memo, useState} from 'react';
import { t } from 'i18next';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";

function AddNewNote() {
  return (
    <Fragment>
      <CustomFormLabel htmlFor="outlined-multiline-static">{t('pages.user-management.user_management_dashboard.Notes Page.Note')}</CustomFormLabel>
      <CustomTextField
        id="outlined-multiline-static"
        multiline
        rows={10}
        variant="outlined"
        fullWidth
      />
    </Fragment>
  );
}

export default memo(AddNewNote);
