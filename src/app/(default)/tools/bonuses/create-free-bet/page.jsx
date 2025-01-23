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
  InputAdornment
} from '@mui/material';
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
      fixture: [],
      sport: [],
      category: [],
      tournament: [],
      match: [],
      betType: [],
      currency: '',
      startDate: '',
      endDate: '',
      minBonusAmount: '',
      maxBonusAmount: '',
      minMatchCount: '',
      minTurnoverRate: '',
      minBetAmount: '',
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
            subTitle={t('pages.tools.bonus.Transfer Bonus')}
          />
        </Grid>

        <Grid item xs={12} className={"pt-0"}>
          <ParentCard
            title={t('pages.tools.bonus.Transfer Bonus')}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid container columnSpacing={{xs: 1, sm: 2, md: 3}} rowSpacing={0}>
                <Grid item xs={12} sm={12} lg={4}>
                  <CustomFormLabel sx={{mt: 0}} htmlFor="promotionName">{t('pages.tools.bonus.promotionName')}</CustomFormLabel>
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
                <Grid item xs={6} sm={4} lg={2}>
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
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel sx={{mt: 0}} htmlFor="fixture">{t('pages.tools.bonus.fixture')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="fixture"
                      name="fixture"
                      multiple
                      value={formik.values.fixture}
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
                    {formik.errors.fixture && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.fixture}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel sx={{mt: 0}} htmlFor="sport">{t('pages.tools.bonus.sport')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="sport"
                      name="sport"
                      multiple
                      value={formik.values.sport}
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
                    {formik.errors.sport && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.sport}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="category">{t('pages.tools.bonus.category')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="category"
                      name="category"
                      multiple
                      value={formik.values.category}
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
                    {formik.errors.category && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.category}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="tournament">{t('pages.tools.bonus.tournament')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="tournament"
                      name="tournament"
                      multiple
                      value={formik.values.tournament}
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
                    {formik.errors.tournament && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.tournament}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="match">{t('pages.tools.bonus.match')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="match"
                      name="match"
                      multiple
                      value={formik.values.match}
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
                    {formik.errors.match && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.match}{' '}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="betType">{t('pages.tools.bonus.betType')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="betType"
                      name="betType"
                      multiple
                      value={formik.values.betType}
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
                    {formik.errors.betType && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.betType}{' '}
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
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel htmlFor="currency">{t('pages.tools.bonus.currency')}</CustomFormLabel>
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
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="minBonusAmount">{t('pages.tools.bonus.minBonusAmount')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minBonusAmount"
                    name="minBonusAmount"
                    type="number"
                    fullWidth
                    value={formik.values.minBonusAmount}
                    onChange={formik.handleChange}
                    error={formik.touched.minBonusAmount && Boolean(formik.errors.minBonusAmount)}
                    helperText={formik.touched.minBonusAmount && formik.errors.minBonusAmount}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="minMatchCount">{t('pages.tools.bonus.minMatchCount')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minMatchCount"
                    name="minMatchCount"
                    type="number"
                    fullWidth
                    value={formik.values.minMatchCount}
                    onChange={formik.handleChange}
                    error={formik.touched.minMatchCount && Boolean(formik.errors.minMatchCount)}
                    helperText={formik.touched.minMatchCount && formik.errors.minMatchCount}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="minTurnoverRate">{t('pages.tools.bonus.minTurnoverRate')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minTurnoverRate"
                    name="minTurnoverRate"
                    type="number"
                    fullWidth
                    value={formik.values.minTurnoverRate}
                    onChange={formik.handleChange}
                    error={formik.touched.minTurnoverRate && Boolean(formik.errors.minTurnoverRate)}
                    helperText={formik.touched.minTurnoverRate && formik.errors.minTurnoverRate}
                  />
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="minBetAmount">{t('pages.tools.bonus.minBetAmount')}</CustomFormLabel>
                  <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="minBetAmount"
                    name="minBetAmount"
                    type="number"
                    fullWidth
                    value={formik.values.minBetAmount}
                    onChange={formik.handleChange}
                    error={formik.touched.minBetAmount && Boolean(formik.errors.minBetAmount)}
                    helperText={formik.touched.minBetAmount && formik.errors.minBetAmount}
                  />
                </Grid>

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
