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


function FreeSpinActionModal({id, initialValues = {}, readOnly = false, disabled = false, isCreateButton = false, children}) {
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
        const gameList = selectedProviderObj ? selectedProviderObj.games : []

        return (
          <Fragment>
            {isCreateButton ? (
              <Button variant="contained" color="primary" onClick={() => setOpen(true)} disabled={disabled}>
                {children}
              </Button>
            ) : (
              <IconButton onClick={() => setOpen(true)} disabled={disabled}>
                {readOnly ? <IconEye /> : <IconPencil />}
              </IconButton>
            )}

            <Dialog fullWidth maxWidth={'lg'} open={open} onClose={handleClose}>
              <DialogTitle>{t(readOnly ? initialValues?.freeSpinName :`pages.tools.bonus.${!id ? 'Create Free Spin' : 'Update Free Spin'}`)}</DialogTitle>
              <DialogContent>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={0}>
                  <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel
                      htmlFor="freeSpinName">{t('pages.tools.bonus.FreeSpin Name')}</CustomFormLabel>
                    <CustomTextField
                      id="freeSpinName"
                      name="freeSpinName"
                      variant="outlined"
                      fullWidth
                      value={formik.values.freeSpinName}
                      onChange={formik.handleChange}
                      error={formik.touched.freeSpinName && Boolean(formik.errors.freeSpinName)}
                      helperText={formik.touched.freeSpinName && formik.errors.freeSpinName}
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


                  <Grid item xs={12} sm={12} lg={3}>
                    <CustomFormLabel
                      htmlFor="fsCount">{t('pages.tools.bonus.FS Count')}</CustomFormLabel>
                    <CustomTextField
                      id="fsCount"
                      name="fsCount"
                      variant="outlined"
                      fullWidth
                      value={formik.values.fsCount}
                      onChange={formik.handleChange}
                      error={formik.touched.fsCount && Boolean(formik.errors.fsCount)}
                      helperText={formik.touched.fsCount && formik.errors.fsCount}
                      disabled={readOnly}
                    />
                  </Grid>

                  <Grid item xs={6} sm={4} lg={3}>
                    <CustomFormLabel htmlFor={`perSpinAmount`}>
                      {t('pages.tools.bonus.Bet Per Spin')}
                    </CustomFormLabel>
                    <CustomOutlinedInput
                      endAdornment={<InputAdornment position="end">₺</InputAdornment>}
                      id={`betPerSpin`}
                      name={`betPerSpin`}
                      type="number"
                      fullWidth
                      value={formik.values.betPerSpin}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched?.betPerSpin &&
                        Boolean(formik.errors.betPerSpin)
                      }
                      helperText={
                        formik.touched.betPerSpin &&
                        formik.errors.betPerSpin
                      }
                    />
                  </Grid>

                  <Grid item xs={6} sm={4} lg={3}>
                    <CustomFormLabel htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                    <FormControl className={'w-full'}>
                      <Select
                        id="targetUser"
                        name="targetUser"
                        value={formik.values.targetUser}
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
                            disabled={readOnly} value="validForAllMembers" name="validForAllMembers"
                            onChange={formik.handleChange} />}
                          label={t('pages.tools.bonus.validForAllMembers')}
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

export default memo(FreeSpinActionModal);
