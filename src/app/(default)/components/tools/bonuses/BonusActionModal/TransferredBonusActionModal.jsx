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
  DialogActions, InputLabel, Checkbox,
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
import TextField from '@mui/material/TextField';

const multipleSelectItems = [
  'Option A',
  'Option V',
  'Option R',
  'Option O',
  'Option C',
  'Option M',
  'Option B',
];

// providerData.js
export const providerData = [
  {
    id: 'live-casino',
    label: 'Live Casino',
    providers: [
      {
        id: 'evolution',
        label: 'Evolution',
        games: [
          { id: 'lightning-roulette', label: 'Lightning Roulette' },
          { id: 'blackjack-lobby', label: 'Blackjack Lobby' },
        ],
      },
      {
        id: 'ezugi',
        label: 'Ezugi',
        games: [
          { id: 'baccarat', label: 'Baccarat' },
          { id: 'roulette', label: 'Roulette' },
        ],
      },
    ],
  },
  {
    id: 'casino',
    label: 'Casino',
    providers: [
      {
        id: 'egt',
        label: 'EGT',
        games: [
          { id: 'flaming-hot', label: 'Flaming Hot' },
          { id: 'burning-hot', label: 'Burning Hot' },
          { id: 'shining-crown-40', label: 'Shining Crown 40' },
        ],
      },
      {
        id: 'pragmatic',
        label: 'Pragmatic',
        games: [
          { id: 'big-bass-bonanza', label: 'Big Bass Bonanza' },
          { id: 'sweet-bonanza', label: 'Sweet Bonanza' },
        ],
      },
      {
        id: 'endorphina',
        label: 'Endorphina',
        games: [
          { id: 'lucky-streak-3', label: 'Lucky Streak 3' },
          { id: 'book-of-santa', label: 'Book of Santa' },
        ],
      },
    ],
  },
  {
    id: 'virtual-games',
    label: 'Virtual Games',
    providers: [
      {
        id: 'kiron',
        label: 'Kiron',
        games: [
          { id: 'virtual-football', label: 'Virtual Football' },
          { id: 'virtual-greyhounds', label: 'Virtual Greyhounds' },
        ],
      },
    ],
  },
]


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
        maxPayoutMultiplier: "",
        maxBonusLimit: "",
        providerType: '',
        provider: '',
        game: '',
        segmentPercents: [
          { name: 'new', checked: false, percentValue: 0 },
          { name: 'current', checked: true, percentValue: 0 },
          { name: 'loyal', checked: false, percentValue: 0 },
          { name: 'vip', checked: true, percentValue: 0 },
        ],
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
      {(formik) => {
        const selectedProviderTypeObj = providerData.find(
          (type) => type.id === formik.values.providerType
        )
        const providerList = selectedProviderTypeObj
          ? selectedProviderTypeObj.providers
          : []

        const selectedProviderObj = providerList.find(
          (p) => p.id === formik.values.provider
        )
        const gameList = selectedProviderObj ? selectedProviderObj.games : [];

        const visibleFields = {
          bonusName: true,
          startDate: true,
          endDate: true,
          bonusCategory: true,
          paymentMethod: true,
          targetUser: true,
          maxBonusLimit: true,
          wager: true,
          WagerMultiplier: true,
          maxPayoutMultiplier: true,
          approvalType: true,
          bonusType: true,
          bonusTurnoverCount: true,
          mainBalanceTurnoverCount: true,
          bonusPercentage: true,
          regions: true,
          minimumAmount: true,
          maximumAmount: true,
          descriptionText: true,
          validForAllMembers: true,
          validOnlyForApprovedMembers: true,
          validOnlyForVIPMembers: true,
          validOnlyForLastDeposit: true,
          providerType: true,
          provider: true,
          game: true,
          segmentPercents: true,
          bonusPercents: true
        };

        const checkIsVisible = (f) => visibleFields?.[f];

        return (
          <Fragment>
            {isCreateButton ? (
              <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                {children}
              </Button>
            ) : (
              <IconButton onClick={() => setOpen(true)}>
                {readOnly ? <IconEye /> : <IconPencil />}
              </IconButton>
            )}

            <Dialog fullWidth maxWidth={'lg'} open={open} onClose={handleClose}>
              <DialogTitle>{t(`pages.tools.bonus.${!id ? 'Create Bonus' : 'Update Bonus'}`)}</DialogTitle>
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
                    <CustomFormLabel htmlFor="startDate">{t('pages.tools.bonus.startDate')}</CustomFormLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'tr'}>
                        <DateTimePicker
                          value={startDateTime}
                          onChange={(newValue) => {
                            setStartDateTime(newValue);
                          }}
                          format={'DD/MM/YYYY HH:mm:ss'}
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
                    <CustomFormLabel htmlFor="endDate">{t('pages.tools.bonus.endDate')}</CustomFormLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'tr'}>
                        <DateTimePicker
                          value={endDateTime}
                          onChange={(newValue) => {
                            setEndDateTime(newValue);
                          }}
                          disabled={readOnly}
                          format={'DD/MM/YYYY HH:mm:ss'}
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


                  <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel
                      htmlFor="BonusAmount">{t('pages.tools.bonus.Bonus Amount')}</CustomFormLabel>
                    <CustomTextField
                      id="BonusAmount"
                      name="BonusAmount"
                      variant="outlined"
                      fullWidth
                      endAdornment={<InputAdornment position="end">₺</InputAdornment>}
                      value={formik.values.BonusAmount}
                      onChange={formik.handleChange}
                      error={formik.touched.BonusAmount && Boolean(formik.errors.BonusAmount)}
                      helperText={formik.touched.BonusAmount && formik.errors.BonusAmount}
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

                      {['Çevrimli', 'Çevrimsiz', 'Koşulsuz']?.map((opt, k) => (
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
                      value={formik.values?.wager==="Çevrimsiz" ? 1 : formik.values.WagerMultiplier}
                      onChange={formik.handleChange}
                      error={formik.touched.WagerMultiplier && Boolean(formik.errors.WagerMultiplier)}
                      helperText={formik.touched.WagerMultiplier && formik.errors.WagerMultiplier}
                      disabled={readOnly || formik.values?.wager==="Çevrimsiz"}
                    />
                  </Grid>

                  {checkIsVisible("maxPayoutMultiplier") && <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel
                      htmlFor="maxPayoutMultiplier">{t('pages.tools.bonus.maxPayoutMultiplier')}</CustomFormLabel>
                    <CustomTextField
                      id="maxPayoutMultiplier"
                      name="maxPayoutMultiplier"
                      variant="outlined"
                      fullWidth
                      value={formik.values.maxPayoutMultiplier}
                      onChange={formik.handleChange}
                      error={formik.touched.maxPayoutMultiplier && Boolean(formik.errors.maxPayoutMultiplier)}
                      helperText={formik.touched.maxPayoutMultiplier && formik.errors.maxPayoutMultiplier}
                      disabled={readOnly}
                    />
                  </Grid>}



                  <Grid item xs={6} sm={4} lg={3}>
                    <CustomFormLabel htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                    <FormControl className={'w-full'}>
                      <Select
                        id="targetUser"
                        name="targetUser"
                        multiple
                        value={typeof formik.values.targetUser === 'string' ? formik.values.targetUser.split(',') : formik.values.targetUser}
                        onChange={formik.handleChange}
                        input={<OutlinedInput />}
                        disabled={readOnly}
                      >
                        {['VIP', 'Yeni Üye', 'Sadık Üye', "Custom"].map((name) => (
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

                  {formik.values.targetUser.includes("Custom") && (
                    <Grid item xs={12} sm={6}>
                      <Box mt={2} p={2}>
                        <CustomFormLabel>{t('pages.tools.bonus.addCustomUser')}</CustomFormLabel>
                        <TextField
                          fullWidth
                          id="customUsers"
                          name="customUsers"
                          placeholder={t('pages.tools.bonus.customUserPlaceholder')}
                          value={formik.values.customUsers || ''}
                          onChange={formik.handleChange}
                          disabled={readOnly}
                        />
                        <Box mt={2}>
                          <Typography variant="body2" color="textSecondary">
                            {t('pages.tools.bonus.or')}
                          </Typography>
                          <Button variant="outlined" component="label">
                            {t('pages.tools.bonus.chooseFile')}
                            <input type="file" hidden onChange={(event) => {}} />
                          </Button>
                        </Box>
                        <Box mt={2}>
                          <Typography variant="body2" color="textSecondary">
                            {t('pages.tools.bonus.mustBeCSV')}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {t('pages.tools.bonus.mustBeIDsFormat')}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )}



                  <Divider />

                  <div className={'w-full px-5'}>
                    <CustomFormLabel sx={{ mb: 0 }} htmlFor={`game`}>
                      {t('pages.tools.bonus.game')}
                    </CustomFormLabel>
                    <Grid container spacing={2} alignItems="center">

                      <Grid item xs={6} sm={4} lg={3}>
                        <FormControl fullWidth margin="normal">
                          <InputLabel id="providerType-label">Provider Type</InputLabel>
                          <Select
                            labelId="providerType-label"
                            id="providerType"
                            name="providerType"
                            label="Provider Type"
                            value={formik.values.providerType}
                            onChange={(e) => {
                              formik.setFieldValue('providerType', e.target.value);
                              formik.setFieldValue('provider', '');
                              formik.setFieldValue('game', '');
                            }}
                          >
                            {providerData.map((type) => (
                              <MenuItem key={type.id} value={type.id}>
                                {type.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={4} lg={3}>
                        <FormControl fullWidth margin="normal" disabled={!providerList.length}>
                          <InputLabel id="provider-label">Provider</InputLabel>
                          <Select
                            labelId="provider-label"
                            id="provider"
                            name="provider"
                            label="Provider"
                            value={formik.values.provider}
                            onChange={(e) => {
                              formik.setFieldValue('provider', e.target.value);
                              formik.setFieldValue('game', '');
                            }}
                          >
                            {providerList.map((prov) => (
                              <MenuItem key={prov.id} value={prov.id}>
                                {prov.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6} sm={4} lg={3}>
                        <FormControl fullWidth margin="normal" disabled={!gameList.length}>
                          <InputLabel id="game-label">Game</InputLabel>
                          <Select
                            labelId="game-label"
                            id="game"
                            name="game"
                            label="Game"
                            value={formik.values.game}
                            onChange={formik.handleChange}
                          >
                            {gameList.map((g) => (
                              <MenuItem key={g.id} value={g.id}>
                                {g.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                    </Grid>
                  </div>



                  <Grid item xs={12} mt={3}>
                    <Stack direction="row" spacing={2}>
                      <Box mt="-10px" mb={3}>
                        <FormControlLabel
                          control={<CustomCheckbox
                            disabled={readOnly} value="validOnlyForApprovedMembers" name="validOnlyForApprovedMembers"
                            onChange={formik.handleChange} />}
                          label={t('pages.tools.bonus.validOnlyForApprovedMembers')}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomFormLabel
                      htmlFor="descriptionText">{t('pages.tools.bonus.descriptionText')}</CustomFormLabel>

                    <Editor
                      disabled={readOnly}
                      apiKey="guprq03hh5v1djtbltywxovby1p2yinwzut4lms5dte35j1h"
                      init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
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
        );
      }}
    </Formik>
  );
}

export default memo(BonusActionModal);
