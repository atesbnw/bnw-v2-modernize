"use client";
import React, {memo, useState, Fragment} from 'react';
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
  Stack,
  Box,
  FormControlLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
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
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import { IconEye, IconPencil } from '@tabler/icons-react';
import Divider from '@mui/material/Divider';

const multipleSelectItems = [
  'Option A',
  'Option V',
  'Option R',
  'Option O',
  'Option C',
  'Option M',
  'Option B',
];

function BonusActionModal({id, initialValues = {}, isPermission = false, isCreateButton = false, children}) {
  const [open, setOpen] = React.useState(false);
  const [descriptionTextState, setDescriptionTextState] = useState(`<b>Lorem Ipsum</b>`);
  const [startDateTime, setStartDateTime] = React.useState(dayjs());
  const [endDateTime, setEndDateTime] = React.useState(dayjs());
  const [finishDateTime, setFinishDateTime] = React.useState(dayjs());

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      bonusName: '',
      requestType: '',
      approvalType: '',
      bonusType: '',
      bonusCategory: '',
      bonusTurnoverCount: '',
      mainBalanceTurnoverCount: '',
      gameCategory: [],
      bonusPercentage: '',
      regions: [],
      paymentMethod: [],
      startDate: '',
      endDate: '',
      minimumAmount: '',
      maximumAmount: '',
      descriptionText: '',
      validForAllMembers: '',
      validOnlyForApprovedMembers: '',
      validOnlyForVIPMembers: '',
      validOnlyForLastDeposit: '',
      ...initialValues
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>

      {isCreateButton ? (
        <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
          {children}
        </Button>
      ) : (
        <IconButton onClick={() => setOpen(true)}>
          {!isPermission ? <IconEye /> : <IconPencil />}
        </IconButton>
      )}

      <Dialog fullWidth maxWidth={"lg"}  open={open} onClose={handleClose}>
        <DialogTitle>{t(`pages.tools.bonus.${!id ? "Create Bonus" : "Update Bonus"}`)}</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={0}>
              <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel sx={{ mt: 0 }}
                                 htmlFor="bonusName">{t('pages.tools.bonus.Bonus Name')}</CustomFormLabel>
                <CustomTextField
                  id="bonusName"
                  name="bonusName"
                  variant="outlined"
                  fullWidth
                  value={formik.values.bonusName}
                  onChange={formik.handleChange}
                  error={formik.touched.bonusName && Boolean(formik.errors.bonusName)}
                  helperText={formik.touched.bonusName && formik.errors.bonusName}
                />
              </Grid>
              <Grid item xs={6} sm={4} lg={2}>
                <CustomFormLabel sx={{ mt: 0 }}
                                 htmlFor="requestType">{t('pages.tools.bonus.requestType')}</CustomFormLabel>
                <CustomSelect
                  id="requestType"
                  name="requestType"
                  fullWidth
                  variant="outlined"
                  value={formik.values.requestType}
                  onChange={formik.handleChange}
                >

                  {['Option A', 'Option B', 'Option C']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.requestType && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.requestType}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} sm={4} lg={2}>
                <CustomFormLabel sx={{ mt: 0 }} htmlFor="bonusType">{t('pages.tools.bonus.bonusType')}</CustomFormLabel>
                <CustomSelect
                  id="bonusType"
                  name="bonusType"
                  fullWidth
                  variant="outlined"
                  value={formik.values.bonusType}
                  onChange={formik.handleChange}
                >
                  {['Deposit', 'Freespin', 'FreeBet']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.bonusType && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.bonusType}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} sm={4} lg={2}>
                <CustomFormLabel sx={{ mt: 0 }}
                                 htmlFor="bonusCategory">{t('pages.tools.bonus.bonusCategory')}</CustomFormLabel>
                <CustomSelect
                  id="bonusCategory"
                  name="bonusCategory"
                  fullWidth
                  variant="outlined"
                  value={formik.values.bonusCategory}
                  onChange={formik.handleChange}
                >

                  {['Option A', 'Option B', 'Option C']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.bonusCategory && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.bonusCategory}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel
                  htmlFor="bonusTurnoverCount">{t('pages.tools.bonus.bonusTurnoverCount')}</CustomFormLabel>
                <CustomSelect
                  id="bonusTurnoverCount"
                  name="bonusTurnoverCount"
                  fullWidth
                  variant="outlined"
                  value={formik.values.bonusTurnoverCount}
                  onChange={formik.handleChange}
                >
                  {['Option A', 'Option B', 'Option C']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.bonusTurnoverCount && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.bonusTurnoverCount}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel
                  htmlFor="mainBalanceTurnoverCount">{t('pages.tools.bonus.mainBalanceTurnoverCount')}</CustomFormLabel>
                <CustomSelect
                  id="mainBalanceTurnoverCount"
                  name="mainBalanceTurnoverCount"
                  fullWidth
                  variant="outlined"
                  value={formik.values.mainBalanceTurnoverCount}
                  onChange={formik.handleChange}
                >

                  {['Option A', 'Option B', 'Option C']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.mainBalanceTurnoverCount && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.mainBalanceTurnoverCount}{' '}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel htmlFor="gameCategory">{t('pages.tools.bonus.gameCategory')}</CustomFormLabel>
                <FormControl className={"w-full"}>
                  <Select
                    id="gameCategory"
                    name="gameCategory"
                    multiple
                    value={typeof formik.values.gameCategory === 'string' ? formik.values.gameCategory.split(',') : formik.values.gameCategory}
                    onChange={formik.handleChange}
                    input={<OutlinedInput />}
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
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel htmlFor="bonusPercentage">{t('pages.tools.bonus.bonusPercentage')}</CustomFormLabel>
                <CustomSelect
                  id="bonusPercentage"
                  name="bonusPercentage"
                  fullWidth
                  variant="outlined"
                  value={formik.values.bonusPercentage}
                  onChange={formik.handleChange}
                >

                  {['Option A', 'Option B', 'Option C']?.map((opt,k) => (
                    <MenuItem value={opt} key={k}>{opt}</MenuItem>
                  ))}
                </CustomSelect>
                {formik.errors.bonusPercentage && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {' '}
                    {formik.errors.bonusPercentage}{' '}
                  </FormHelperText>
                )}
              </Grid>

              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel htmlFor="paymentMethod">{t('pages.tools.bonus.paymentMethod')}</CustomFormLabel>
                <FormControl className={"w-full"}>
                  <Select
                    id="paymentMethod"
                    name="paymentMethod"
                    multiple
                    value={typeof formik.values.paymentMethod === 'string' ? formik.values.paymentMethod.split(',') : formik.values.paymentMethod}
                    onChange={formik.handleChange}
                    input={<OutlinedInput />}
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
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4} lg={3}>
                <CustomFormLabel htmlFor="startDate">{t('pages.tools.bonus.startDate')}</CustomFormLabel>
                <FormControl sx={{ width: '100%' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
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
                <CustomFormLabel htmlFor="endDate">{t('pages.tools.bonus.endDate')}</CustomFormLabel>
                <FormControl sx={{ width: '100%' }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
                    <DateTimePicker
                      value={endDateTime}
                      onChange={(newValue) => {
                        setEndDateTime(newValue);
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
              <Grid item xs={6} sm={4} lg={4}>
                <CustomFormLabel
                  htmlFor="minimumAmount">{t('pages.tools.bonus.minimumAmount')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="minimumAmount"
                  name="minimumAmount"
                  type="number"
                  fullWidth
                  value={formik.values.minimumAmount}
                  onChange={formik.handleChange}
                  error={formik.touched.minimumAmount && Boolean(formik.errors.minimumAmount)}
                  helperText={formik.touched.minimumAmount && formik.errors.minimumAmount}
                />
              </Grid>
              <Grid item xs={6} sm={4} lg={4}>
                <CustomFormLabel
                  htmlFor="maximumAmount">{t('pages.tools.bonus.maximumAmount')}</CustomFormLabel>
                <CustomOutlinedInput
                  startAdornment={
                    <InputAdornment position="start">₺</InputAdornment>
                  }
                  id="maximumAmount"
                  name="maximumAmount"
                  type="number"
                  fullWidth
                  value={formik.values.maximumAmount}
                  onChange={formik.handleChange}
                  error={formik.touched.maximumAmount && Boolean(formik.errors.maximumAmount)}
                  helperText={formik.touched.maximumAmount && formik.errors.maximumAmount}
                />
              </Grid>
              <Grid item xs={12} mt={3}>
                <Stack direction="row" spacing={2}>
                  <Box mt="-10px" mb={3}>
                    <FormControlLabel
                      control={<CustomCheckbox value="validForAllMembers" name="validForAllMembers"
                                               onChange={formik.handleChange} />}
                      label={t('pages.tools.bonus.validForAllMembers')}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox value="validOnlyForApprovedMembers" name="validOnlyForApprovedMembers"
                                               onChange={formik.handleChange} />}
                      label={t('pages.tools.bonus.validOnlyForApprovedMembers')}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox value="validOnlyForVIPMembers" name="validOnlyForVIPMembers"
                                               onChange={formik.handleChange} />}
                      label={t('pages.tools.bonus.validOnlyForVIPMembers')}
                    />
                    <FormControlLabel
                      control={<CustomCheckbox value="validOnlyForLastDeposit" name="validOnlyForLastDeposit"
                                               onChange={formik.handleChange} />}
                      label={t('pages.tools.bonus.validOnlyForLastDeposit')}
                    />
                  </Box>
                </Stack>
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{ mr: 1 }} type="submit">
            {t('i.Save')}
          </Button>
          <Button color="error" variant="contained" onClick={handleClose}>
            {t('i.Cancel')}
          </Button>
        </DialogActions>
      </Dialog>

    </Fragment>
  );
}

export default memo(BonusActionModal);
