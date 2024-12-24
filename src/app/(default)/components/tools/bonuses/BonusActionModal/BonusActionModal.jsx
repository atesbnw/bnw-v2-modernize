"use client";
import React, {memo, useState, Fragment} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { t } from 'i18next';
import { Formik, Form, FieldArray } from 'formik';
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
import { IconEye, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
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

function BonusActionModal({id, initialValues = {}, readOnly = false, isCreateButton = false, children}) {
  const [open, setOpen] = React.useState(false);
  const [descriptionTextState, setDescriptionTextState] = useState(`<b>Lorem Ipsum</b>`);
  const [startDateTime, setStartDateTime] = React.useState(dayjs());
  const [endDateTime, setEndDateTime] = React.useState(dayjs());
  const [finishDateTime, setFinishDateTime] = React.useState(dayjs());

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        bonusName: '',
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
        targetUser: '',
        minimumAmount: '',
        maximumAmount: '',
        descriptionText: '',
        validForAllMembers: '',
        validOnlyForApprovedMembers: '',
        validOnlyForVIPMembers: '',
        validOnlyForLastDeposit: '',
        WagerMultiplier: "",
        maxBonusLimit: "",
        bonusPercents: [
          { minimumAmount: "", maximumAmount: "", bonusPercentage: "" },
        ],
        ...initialValues
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Fragment>
          {isCreateButton ? (
            <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
              {children}
            </Button>
          ) : (
            <IconButton onClick={() => setOpen(true)}>
              {readOnly ? <IconEye /> : <IconPencil />}
            </IconButton>
          )}

          <Dialog fullWidth maxWidth={"lg"}  open={open} onClose={handleClose}>
            <DialogTitle>{t(`pages.tools.bonus.${!id ? "Create Bonus" : "Update Bonus"}`)}</DialogTitle>
            <DialogContent>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={0}>
                <Grid item xs={12} sm={12} lg={4}>
                  <CustomFormLabel
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
                    disabled={readOnly}
                  />
                </Grid>

                <Grid item xs={6} sm={4} lg={4}>
                  <CustomFormLabel  htmlFor="startDate">{t('pages.tools.bonus.startDate')}</CustomFormLabel>
                  <FormControl sx={{ width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
                      <DateTimePicker
                        value={startDateTime}
                        onChange={(newValue) => {
                          setStartDateTime(newValue);
                        }}
                        format={"DD/MM/YYYY HH:mm:ss"}
                        ampm={false}
                        disabled={readOnly}
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
                  <CustomFormLabel  htmlFor="endDate">{t('pages.tools.bonus.endDate')}</CustomFormLabel>
                  <FormControl sx={{ width: '100%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
                      <DateTimePicker
                        value={endDateTime}
                        onChange={(newValue) => {
                          setEndDateTime(newValue);
                        }}
                        disabled={readOnly}
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

                {/*<Grid item xs={6} sm={4} lg={3}>*/}
                {/*  <CustomFormLabel  htmlFor="bonusType">{t('pages.tools.bonus.bonusType')}</CustomFormLabel>*/}
                {/*  <CustomSelect*/}
                {/*    id="bonusType"*/}
                {/*    name="bonusType"*/}
                {/*    fullWidth*/}
                {/*    variant="outlined"*/}
                {/*    value={formik.values.bonusType}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    disabled={readOnly}*/}
                {/*  >*/}
                {/*    {['Deposit', 'Freespin', 'FreeBet']?.map((opt,k) => (*/}
                {/*      <MenuItem value={opt} key={k}>{opt}</MenuItem>*/}
                {/*    ))}*/}
                {/*  </CustomSelect>*/}
                {/*  {formik.errors.bonusType && (*/}
                {/*    <FormHelperText error id="standard-weight-helper-text-email-login">*/}
                {/*      {' '}*/}
                {/*      {formik.errors.bonusType}{' '}*/}
                {/*    </FormHelperText>*/}
                {/*  )}*/}
                {/*</Grid>*/}
                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="bonusCategory">{t('pages.tools.bonus.bonusCategory')}</CustomFormLabel>
                  <CustomSelect
                    id="bonusCategory"
                    name="bonusCategory"
                    fullWidth
                    variant="outlined"
                    value={formik.values.bonusCategory}
                    onChange={formik.handleChange}
                    disabled={readOnly}
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
                  <CustomFormLabel htmlFor="gameCategory">{t('pages.tools.bonus.gameCategory')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="gameCategory"
                      name="gameCategory"
                      multiple
                      value={typeof formik.values.gameCategory === 'string' ? formik.values.gameCategory.split(',') : formik.values.gameCategory}
                      onChange={formik.handleChange}
                      input={<OutlinedInput />}
                      disabled={readOnly}
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
                  <CustomFormLabel htmlFor="paymentMethod">{t('pages.tools.bonus.paymentMethod')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="paymentMethod"
                      name="paymentMethod"
                      multiple
                      value={typeof formik.values.paymentMethod === 'string' ? formik.values.paymentMethod.split(',') : formik.values.paymentMethod}
                      onChange={formik.handleChange}
                      input={<OutlinedInput />}
                      disabled={readOnly}
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
                  <CustomFormLabel htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                  <FormControl className={"w-full"}>
                    <Select
                      id="targetUser"
                      name="targetUser"
                      multiple
                      value={typeof formik.values.targetUser === 'string' ? formik.values.targetUser.split(',') : formik.values.targetUser}
                      onChange={formik.handleChange}
                      input={<OutlinedInput />}
                      disabled={readOnly}
                    >
                      {['VIP', 'Yeni Üye', 'Sadık Üye'].map((name) => (
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



                <Grid item xs={12} sm={12} lg={3}>
                  <CustomFormLabel
                    htmlFor="maxBonusLimit">{t('pages.tools.bonus.maxBonusLimit')}</CustomFormLabel>
                  <CustomTextField
                    id="maxBonusLimit"
                    name="maxBonusLimit"
                    variant="outlined"
                    fullWidth
                    value={formik.values.maxBonusLimit}
                    onChange={formik.handleChange}
                    error={formik.touched.maxBonusLimit && Boolean(formik.errors.maxBonusLimit)}
                    helperText={formik.touched.maxBonusLimit && formik.errors.maxBonusLimit}
                    disabled={readOnly}
                  />
                </Grid>


                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="wager">{t('pages.tools.bonus.Wager')}</CustomFormLabel>
                  <CustomSelect
                    id="wager"
                    name="wager"
                    fullWidth
                    variant="outlined"
                    value={formik.values.wager}
                    onChange={formik.handleChange}
                    disabled={readOnly}
                  >

                    {['Çevrimli', 'Çevrimsiz', 'Koşulsuz']?.map((opt,k) => (
                      <MenuItem value={opt} key={k}>{opt}</MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.wager && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.wager}{' '}
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={12} sm={12} lg={3}>
                  <CustomFormLabel
                    htmlFor="WagerMultiplier">{t('pages.tools.bonus.WagerMultiplier')}</CustomFormLabel>
                  <CustomTextField
                    id="WagerMultiplier"
                    name="WagerMultiplier"
                    variant="outlined"
                    fullWidth
                    value={formik.values.WagerMultiplier}
                    onChange={formik.handleChange}
                    error={formik.touched.WagerMultiplier && Boolean(formik.errors.WagerMultiplier)}
                    helperText={formik.touched.WagerMultiplier && formik.errors.WagerMultiplier}
                    disabled={readOnly}
                  />
                </Grid>

                <Grid item xs={6} sm={4} lg={3}>
                  <CustomFormLabel
                    htmlFor="mainBalanceTurnoverCount">{t('pages.tools.bonus.ipCheck')}</CustomFormLabel>
                  <CustomSelect
                    id="ipCheck"
                    name="ipCheck"
                    fullWidth
                    variant="outlined"
                    value={formik.values.ipCheck}
                    onChange={formik.handleChange}
                    disabled={readOnly}
                  >

                    {['Active', 'Passive']?.map((opt,k) => (
                      <MenuItem value={opt} key={k}>{opt}</MenuItem>
                    ))}
                  </CustomSelect>
                  {formik.errors.ipCheck && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {' '}
                      {formik.errors.ipCheck}{' '}
                    </FormHelperText>
                  )}
                </Grid>


                {/*<Grid item xs={6} sm={4} lg={3}>*/}
                {/*  <CustomFormLabel*/}
                {/*    htmlFor="bonusTurnoverCount">{t('pages.tools.bonus.bonusTurnoverCount')}</CustomFormLabel>*/}
                {/*  <CustomSelect*/}
                {/*    id="bonusTurnoverCount"*/}
                {/*    name="bonusTurnoverCount"*/}
                {/*    fullWidth*/}
                {/*    variant="outlined"*/}
                {/*    value={formik.values.bonusTurnoverCount}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    disabled={readOnly}*/}
                {/*  >*/}
                {/*    {['Option A', 'Option B', 'Option C']?.map((opt,k) => (*/}
                {/*      <MenuItem value={opt} key={k}>{opt}</MenuItem>*/}
                {/*    ))}*/}
                {/*  </CustomSelect>*/}
                {/*  {formik.errors.bonusTurnoverCount && (*/}
                {/*    <FormHelperText error id="standard-weight-helper-text-email-login">*/}
                {/*      {' '}*/}
                {/*      {formik.errors.bonusTurnoverCount}{' '}*/}
                {/*    </FormHelperText>*/}
                {/*  )}*/}
                {/*</Grid>*/}


                <div className={"w-full px-5"}>
                  <CustomFormLabel sx={{mb:0}} htmlFor={`bonusPercents`}>
                    {t('pages.tools.bonus.bonusPercents')}
                  </CustomFormLabel>
                  <FieldArray name="bonusPercents">
                    {({ remove, push }) => (
                      <>
                        {formik.values.bonusPercents?.map((bp, i) => (
                          <Grid container key={i} spacing={2} alignItems="center">
                            {/* Min Amount */}
                            <Grid item xs={6} sm={4} lg={3}>
                              <CustomFormLabel htmlFor={`bonusPercents[${i}].minimumAmount`}>
                                {t('pages.tools.bonus.minimumAmount')}
                              </CustomFormLabel>
                              <CustomOutlinedInput
                                startAdornment={<InputAdornment position="start">₺</InputAdornment>}
                                id={`bonusPercents[${i}].minimumAmount`}
                                name={`bonusPercents[${i}].minimumAmount`}
                                type="number"
                                fullWidth
                                value={formik.values.bonusPercents[i].minimumAmount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                  formik.touched.bonusPercents?.[i]?.minimumAmount &&
                                  Boolean(formik.errors.bonusPercents?.[i]?.minimumAmount)
                                }
                                helperText={
                                  formik.touched.bonusPercents?.[i]?.minimumAmount &&
                                  formik.errors.bonusPercents?.[i]?.minimumAmount
                                }
                              />
                            </Grid>

                            {/* Max Amount */}
                            <Grid item xs={6} sm={4} lg={3}>
                              <CustomFormLabel htmlFor={`bonusPercents[${i}].maximumAmount`}>
                                {t('pages.tools.bonus.maximumAmount')}
                              </CustomFormLabel>
                              <CustomOutlinedInput
                                startAdornment={<InputAdornment position="start">₺</InputAdornment>}
                                id={`bonusPercents[${i}].maximumAmount`}
                                name={`bonusPercents[${i}].maximumAmount`}
                                type="number"
                                fullWidth
                                value={formik.values.bonusPercents[i].maximumAmount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                  formik.touched.bonusPercents?.[i]?.maximumAmount &&
                                  Boolean(formik.errors.bonusPercents?.[i]?.maximumAmount)
                                }
                                helperText={
                                  formik.touched.bonusPercents?.[i]?.maximumAmount &&
                                  formik.errors.bonusPercents?.[i]?.maximumAmount
                                }
                              />
                            </Grid>

                            {/* Bonus Percentage */}
                            <Grid item xs={6} sm={4} lg={3}>
                              <CustomFormLabel htmlFor={`bonusPercents[${i}].bonusPercentage`}>
                                {t('pages.tools.bonus.bonusPercentage')}
                              </CustomFormLabel>
                              <CustomSelect
                                id={`bonusPercents[${i}].bonusPercentage`}
                                name={`bonusPercents[${i}].bonusPercentage`}
                                fullWidth
                                variant="outlined"
                                value={formik.values.bonusPercents[i].bonusPercentage}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              >
                                {[5, 10, 15, 20, 25, 30,35,40,45,50,55,60,65,70,75,80,85,90,95,100].map((val) => (
                                  <MenuItem value={val} key={val}>
                                    {val} %
                                  </MenuItem>
                                ))}
                              </CustomSelect>
                              {formik.touched.bonusPercents?.[i]?.bonusPercentage &&
                                formik.errors.bonusPercents?.[i]?.bonusPercentage && (
                                  <FormHelperText error>
                                    {formik.errors.bonusPercents[i].bonusPercentage}
                                  </FormHelperText>
                                )}
                            </Grid>

                            {/* Silme butonu */}
                            <Grid item xs={2} sm={1} className={"mt-8"}>
                              <IconButton
                                type="button"
                                onClick={() => remove(i)}
                                disabled={formik.values.bonusPercents.length === 1}
                              >
                                <IconTrash />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}

                        <div className={"w-full mx-auto flex items-center justify-center mt-4"}>
                          <IconButton
                            type="button"
                            onClick={() => push({ minimumAmount: '', maximumAmount: '', bonusPercentage: '' })}
                          >
                            <IconPlus />
                          </IconButton>
                        </div>
                      </>
                    )}
                  </FieldArray>
                </div>





                <Grid item xs={12} mt={3}>
                  <Stack direction="row" spacing={2}>
                    <Box mt="-10px" mb={3}>
                      <FormControlLabel
                        control={<CustomCheckbox
                          disabled={readOnly} value="validForAllMembers" name="validForAllMembers"
                          onChange={formik.handleChange} />}
                        label={t('pages.tools.bonus.validForAllMembers')}
                      />
                      <FormControlLabel
                        control={<CustomCheckbox
                          disabled={readOnly} value="validOnlyForApprovedMembers" name="validOnlyForApprovedMembers"
                          onChange={formik.handleChange} />}
                        label={t('pages.tools.bonus.validOnlyForApprovedMembers')}
                      />
                      <FormControlLabel
                        control={<CustomCheckbox
                          disabled={readOnly} value="validOnlyForVIPMembers" name="validOnlyForVIPMembers"
                          onChange={formik.handleChange} />}
                        label={t('pages.tools.bonus.validOnlyForVIPMembers')}
                      />
                      <FormControlLabel
                        control={<CustomCheckbox
                          disabled={readOnly} value="validOnlyForLastDeposit" name="validOnlyForLastDeposit"
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
                    disabled={readOnly}
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
            </DialogContent>
            <DialogActions>
              {!readOnly && (
                <Button variant="contained" sx={{ mr: 1 }} type="submit">
                  {t('i.Save')}
                </Button>
              )}
              <Button color="error" variant="contained" onClick={handleClose}>
                {t('i.Cancel')}
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      )}
    </Formik>
  );
}

export default memo(BonusActionModal);
