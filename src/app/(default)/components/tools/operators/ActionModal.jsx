import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import { t } from 'i18next';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {Box, FormControl, FormHelperText, Grid, MenuItem} from "@mui/material";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import {IconCloudUpload, IconPencil, IconPlus} from "@tabler/icons-react";
import {CloudUpload} from "@mui/icons-material";
import dayjs from "dayjs";
import {styled} from "@mui/material/styles";
import dynamic from "next/dynamic";
import '@/app/base/forms/form-quill/Quill.css';
import 'react-quill/dist/quill.snow.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  },
);

function ActionModal({id, data}) {
  const [dateOfBirth, setDateOfBirth] = React.useState(dayjs());

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState({});

  const updateValue = useCallback((field, value) => {
    setValue(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  useEffect(() => {
    data && setValue(prev => ({
      ...prev,
      ...data
    }))
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {id ? (
        <IconButton onClick={() => setOpen(true)}>
          <IconPencil />
        </IconButton>
      ) : (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {t('pages.tools.operators.Create Operator')}
        </Button>
      )}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {id ? (
                t('pages.tools.operators.Edit Operator')
              ) : (
                t('pages.tools.operators.Create Operator')
              )}
            </Typography>
            <Button autoFocus variant="contained" color="success" onClick={() => {
              console.log(value)
              setValue({})
              setOpen(false);
            }}>
              {t('i.Save')}
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} className={"p-6"}>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="name">{t('pages.tools.operators.name')}</CustomFormLabel>
            <CustomTextField
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              value={value?.name}
              onChange={(e) => updateValue('name', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="surname">{t('pages.tools.operators.surname')}</CustomFormLabel>
            <CustomTextField
              id="surname"
              name="surname"
              variant="outlined"
              fullWidth
              value={value?.surname}
              onChange={(e) => updateValue('surname', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="username">{t('pages.tools.operators.username')}</CustomFormLabel>
            <CustomTextField
              id="username"
              name="username"
              variant="outlined"
              fullWidth
              value={value?.username}
              onChange={(e) => updateValue('username', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="password">{t('pages.tools.operators.password')}</CustomFormLabel>
            <CustomTextField
              id="password"
              name="password"
              variant="outlined"
              fullWidth
              value={value?.password}
              onChange={(e) => updateValue('password', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="confirmPassword">{t('pages.tools.operators.confirmPassword')}</CustomFormLabel>
            <CustomTextField
              id="confirmPassword"
              name="confirmPassword"
              variant="outlined"
              fullWidth
              value={value?.confirmPassword}
              onChange={(e) => updateValue('confirmPassword', e?.target.value)}
            />
          </Grid>
          <Grid xs={12} />
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt: 0}} htmlFor="dateOfBirth">{t('pages.tools.operators.dateOfBirth')}</CustomFormLabel>
            <FormControl sx={{width: '100%'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                <DatePicker
                  value={dateOfBirth}
                  onChange={(newValue) => {
                    setDateOfBirth(newValue);
                  }}
                  format={"DD.MM.YYYY"}
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
            <CustomFormLabel sx={{mt:0}} htmlFor="placeOfBirth">{t('pages.tools.operators.placeOfBirth')}</CustomFormLabel>
            <CustomSelect
              id="placeOfBirth"
              name="placeOfBirth"
              fullWidth
              variant="outlined"
              value={value?.placeOfBirth}
              onChange={(e) => updateValue('placeOfBirth', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="idNumber">{t('pages.tools.operators.idNumber')}</CustomFormLabel>
            <CustomTextField
              id="idNumber"
              name="idNumber"
              variant="outlined"
              fullWidth
              value={value?.idNumber}
              onChange={(e) => updateValue('idNumber', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="gender">{t('pages.tools.operators.gender')}</CustomFormLabel>
            <CustomSelect
              id="gender"
              name="gender"
              fullWidth
              variant="outlined"
              value={value?.gender}
              onChange={(e) => updateValue('gender', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="otp">{t('pages.tools.operators.otp')}</CustomFormLabel>
            <CustomSelect
              id="otp"
              name="otp"
              fullWidth
              variant="outlined"
              value={value?.otp}
              onChange={(e) => updateValue('otp', e?.target.value)}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="passive">Passive</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="otpType">{t('pages.tools.operators.otpType')}</CustomFormLabel>
            <CustomSelect
              id="otpType"
              name="otpType"
              fullWidth
              variant="outlined"
              value={value?.otpType}
              onChange={(e) => updateValue('otpType', e?.target.value)}
            >
              <MenuItem value="sms">SMS</MenuItem>
              <MenuItem value="ga">GA</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid xs={12} />
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="country">{t('pages.tools.operators.country')}</CustomFormLabel>
            <CustomSelect
              id="country"
              name="country"
              fullWidth
              variant="outlined"
              value={value?.country}
              onChange={(e) => updateValue('country', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="city">{t('pages.tools.operators.city')}</CustomFormLabel>
            <CustomSelect
              id="city"
              name="city"
              fullWidth
              variant="outlined"
              value={value?.city}
              onChange={(e) => updateValue('city', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="district">{t('pages.tools.operators.district')}</CustomFormLabel>
            <CustomSelect
              id="district"
              name="district"
              fullWidth
              variant="outlined"
              value={value?.district}
              onChange={(e) => updateValue('district', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="address">{t('pages.tools.operators.address')}</CustomFormLabel>
            <CustomTextField
              id="address"
              name="address"
              variant="outlined"
              fullWidth
              value={value?.address}
              onChange={(e) => updateValue('address', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="language">{t('pages.tools.operators.language')}</CustomFormLabel>
            <CustomSelect
              id="language"
              name="language"
              fullWidth
              variant="outlined"
              value={value?.language}
              onChange={(e) => updateValue('language', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="currency">{t('pages.tools.operators.currency')}</CustomFormLabel>
            <CustomSelect
              id="currency"
              name="currency"
              fullWidth
              variant="outlined"
              value={value?.currency}
              onChange={(e) => updateValue('currency', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="operatorRole">{t('pages.tools.operators.operatorRole')}</CustomFormLabel>
            <CustomSelect
              id="operatorRole"
              name="operatorRole"
              fullWidth
              variant="outlined"
              value={value?.operatorRole}
              onChange={(e) => updateValue('operatorRole', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="phone">{t('pages.tools.operators.phone')}</CustomFormLabel>
            <CustomTextField
              id="phone"
              name="phone"
              variant="outlined"
              fullWidth
              value={value?.phone}
              onChange={(e) => updateValue('phone', e?.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={4}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="email">{t('pages.tools.operators.email')}</CustomFormLabel>
            <CustomTextField
              id="email"
              name="email"
              variant="outlined"
              fullWidth
              value={value?.email}
              onChange={(e) => updateValue('email', e?.target.value)}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            backgroundColor: 'background.paper',
            boxShadow: 3,
          }}
        >
          <Box className={"flex justify-between"}>

            {id && (
              <Box>
                <Button variant="contained" color="error" onClick={handleClose}>
                  {t('i.Delete')}
                </Button>
              </Box>
            )}
            <Box>
              <Button sx={{mr: 1}} variant="contained" onClick={() => {
                console.log(value)
                setValue({})
                setOpen(false);
              }}>
                {t('i.Save')}
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                {t('i.Cancel')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}

export default memo(ActionModal);