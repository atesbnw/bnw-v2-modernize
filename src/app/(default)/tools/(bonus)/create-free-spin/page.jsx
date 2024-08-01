"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { t } from 'i18next';
import { useFormik } from 'formik';
import {
  Grid,
  Button,
  MenuItem,
  FormHelperText,
  Select,
  OutlinedInput,
  FormControl,
  InputAdornment,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import { validationSchema } from './validation';
import ParentCard from "@/app/components/shared/ParentCard";
import TitleBar from "@/app/components/TitleBar";
import dayjs from "dayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";
import { IconCloudUpload } from "@tabler/icons-react";

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

const multipleSelectItems = [
  'Option A',
  'Option V',
  'Option R',
  'Option O',
  'Option C',
  'Option M',
  'Option B',
];

function Page() {
  const [descriptionTextState, setDescriptionTextState] = useState(`<b>Lorem Ipsum</b>`);
  const [startDateTime, setStartDateTime] = React.useState(dayjs());
  const [finishDateTime, setFinishDateTime] = React.useState(dayjs());

  const formik = useFormik({
    initialValues: {
      promotionName: '',
      provider: '',
      game: [],
      startDate: '',
      endDate: '',
      currency: '',
      freeSpinAmount: '',
      betPerSpin: '',
      targetUser: '',
      descriptionText: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={"mb-4"}>
          <TitleBar
            link="../tools"
            title={t('Tools.Bonuses')}
            subTitle={t('pages.tools.bonus.Create Free Spin')}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.tools.bonus.Create Free Spin')}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
                <Grid item xs={12} sm={12} lg={4}>
                  <CustomFormLabel sx={{mt: 0}}
                                   htmlFor="promotionName">{t('pages.tools.bonus.promotionName')}</CustomFormLabel>
                  <CustomTextField
                    id="promotionName"
                    name="promotionName"
                    variant="outlined"
                    fullWidth
                    value={formik.values.promotionName}
                    onChange={formik.handleChange}
                    error={formik.touched.promotionName && Boolean(formik.errors.promotionName)}
                    helperText={formik.touched.promotionName && formik.errors.promotionName}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={4}>
                  <CustomFormLabel sx={{mt: 0}} htmlFor="provider">{t('pages.tools.bonus.provider')}</CustomFormLabel>
                  <CustomSelect
                    id="provider"
                    name="provider"
                    fullWidth
                    variant="outlined"
                    value={formik.values.provider}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="option">Option</MenuItem>
                    <MenuItem value="optionb">Option B</MenuItem>
                  </CustomSelect>
                  {formik.errors.provider && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.provider}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={6} sm={4} lg={4}>
                  <CustomFormLabel sx={{mt: 0}}  htmlFor="game">{t('pages.tools.bonus.game')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="game"
                      name="game"
                      multiple
                      value={formik.values.game}
                      onChange={formik.handleChange}
                      input={<OutlinedInput/>}
                    >
                      {multipleSelectItems.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.errors.game && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.game}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="startDate">{t('pages.tools.bonus.startDate')}</CustomFormLabel>
                  <FormControl sx={{width: '100%'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                      <DateTimePicker
                        value={startDateTime}
                        onChange={(newValue) => {
                          setStartDateTime(newValue);
                        }}
                        format={"DD/MM/YYYY HH:mm:ss"}
                        ampm={false}
                        renderInput={(inputProps) => (
                          <CustomTextField
                            {...inputProps}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="startDate">{t('pages.tools.bonus.startDate')}</CustomFormLabel>
                  <FormControl sx={{width: '100%'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                      <DateTimePicker
                        value={finishDateTime}
                        onChange={(newValue) => {
                          setFinishDateTime(newValue);
                        }}
                        format={"DD/MM/YYYY HH:mm:ss"}
                        ampm={false}
                        renderInput={(inputProps) => (
                          <CustomTextField
                            {...inputProps}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                  <CustomFormLabel htmlFor="currency">{t('pages.tools.bonus.currency')}</CustomFormLabel>
                  <CustomSelect
                    id="currency"
                    name="currency"
                    fullWidth
                    variant="outlined"
                    value={formik.values.currency}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="try">TRY</MenuItem>
                    <MenuItem value="usd">USD</MenuItem>
                  </CustomSelect>
                  {formik.errors.currency && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.currency}{' '}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={6} lg={2}>
                  <CustomFormLabel htmlFor="freeSpinAmount">{t('pages.tools.bonus.freeSpinAmount')}</CustomFormLabel>
                  <CustomTextField
                    id="freeSpinAmount"
                    name="freeSpinAmount"
                    variant="outlined"
                    fullWidth
                    value={formik.values.freeSpinAmount}
                    onChange={formik.handleChange}
                    error={formik.touched.freeSpinAmount && Boolean(formik.errors.freeSpinAmount)}
                    helperText={formik.touched.freeSpinAmount && formik.errors.freeSpinAmount}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                  <CustomFormLabel
                    htmlFor="betPerSpin">{t('pages.tools.bonus.betPerSpin')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="betPerSpin"
                    name="betPerSpin"
                    type="number"
                    fullWidth
                    value={formik.values.betPerSpin}
                    onChange={formik.handleChange}
                    error={formik.touched.betPerSpin && Boolean(formik.errors.betPerSpin)}
                    helperText={formik.touched.betPerSpin && formik.errors.betPerSpin}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                  <CustomFormLabel htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                  <CustomSelect
                    id="targetUser"
                    name="targetUser"
                    fullWidth
                    variant="outlined"
                    value={formik.values.targetUser}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="private">Private</MenuItem>
                    <MenuItem value="all">ALL</MenuItem>
                  </CustomSelect>
                  {formik.errors.targetUser && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.targetUser}{' '}
                    </FormHelperText>
                  )}
                </Grid>

                {formik.values.targetUser === 'private' && (
                  <Grid item xs={6} lg={4}>
                    <Box>
                      <CustomFormLabel htmlFor="addUser">{t('pages.tools.bonus.addUser')}</CustomFormLabel>
                      <CustomTextField
                        id="addUser"
                        name="addUser"
                        variant="outlined"
                        fullWidth
                        placeholder={t('pages.tools.bonus.addUserPlaceholder')}
                        value={formik.values.addUser}
                        onChange={formik.handleChange}
                        error={formik.touched.addUser && Boolean(formik.errors.addUser)}
                        helperText={formik.touched.addUser && formik.errors.addUser}
                      />
                    </Box>
                    <Box className={"my-3"}>{t('pages.tools.bonus.or')}</Box>
                    <Box>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<IconCloudUpload />}
                      >
                        {t('pages.tools.bonus.uploadFile')}
                        <VisuallyHiddenInput type="file" />
                      </Button>
                      <Box className={"mt-2"}>{t('pages.tools.bonus.fileUploadText1')}</Box>
                      <Box>{t('pages.tools.bonus.fileUploadText2')}</Box>
                    </Box>
                  </Grid>
                  )}

                <Grid item xs={12}>
                  <CustomFormLabel
                    htmlFor="descriptionText">{t('pages.tools.bonus.descriptionText')}</CustomFormLabel>

                  <Editor
                    apiKey='guprq03hh5v1djtbltywxovby1p2yinwzut4lms5dte35j1h'
                    init={{
                      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_mode: 'embedded',
                      ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue={descriptionTextState}
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
            </form>
          </ParentCard>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Page;