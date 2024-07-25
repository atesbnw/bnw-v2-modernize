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
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
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
  const [deliveryTime, setDeliveryTime] = React.useState(dayjs());

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
          {t('pages.tools.bulk-message.Create Bulk Message')}
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
                t('pages.tools.bulk-message.Edit Bulk Message')
              ) : (
                t('pages.tools.bulk-message.Create Bulk Message')
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
          <Grid item xs={6} sm={4} lg={3}>
            <CustomFormLabel sx={{mt: 0}} htmlFor="deliveryTime">{t('pages.tools.bulk-message.Delivery Time')}</CustomFormLabel>
            <FormControl sx={{width: '100%'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                <DateTimePicker
                  value={deliveryTime}
                  onChange={(newValue) => {
                    setDeliveryTime(newValue);
                  }}
                  format={"DD.MM.YYYY HH:mm:ss"}
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
          <Grid xs={12}/>
          <Grid item xs={6} sm={4} lg={2}>
            <CustomFormLabel sx={{mt:0}} htmlFor="targetUser">{t('pages.tools.bulk-message.Target User')}</CustomFormLabel>
            <CustomSelect
              id="targetUser"
              name="targetUser"
              fullWidth
              variant="outlined"
              value={value?.targetUser}
              onChange={(e) => updateValue('targetUser', e?.target.value)}
            >
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="all">ALL</MenuItem>
            </CustomSelect>
          </Grid>
          {value?.targetUser === 'private' && (
            <Grid item xs={6} lg={4}>
              <Box>
                <CustomFormLabel htmlFor="addUser">{t('pages.tools.bulk-message.Add User')}</CustomFormLabel>
                <CustomTextField
                  id="addUser"
                  name="addUser"
                  variant="outlined"
                  fullWidth
                  placeholder={t('pages.tools.bulk-message.addUserPlaceholder')}
                  value={value?.addUser}
                  onChange={(e) => updateValue('addUser', e?.target.value)}
                />
              </Box>
              <Box className={"my-3"}>{t('pages.tools.bulk-message.or')}</Box>
              <Box>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<IconCloudUpload />}
                >
                  {t('pages.tools.bulk-message.uploadFile')}
                  <VisuallyHiddenInput type="file" />
                </Button>
                <Box className={"mt-2"}>{t('pages.tools.bulk-message.fileUploadText1')}</Box>
                <Box>{t('pages.tools.bulk-message.fileUploadText2')}</Box>
              </Box>
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography variant={"h3"}>{t('pages.tools.bulk-message.Description')}</Typography>

          </Grid>
          <Grid item xs={6} lg={4}>
            <CustomFormLabel  sx={{mt:0}} htmlFor="language">{t('pages.tools.bulk-message.Language')}</CustomFormLabel>
              <CustomSelect
                id="language"
                name="language"
                fullWidth
                variant="outlined"
                value={value?.language}
                onChange={(e) => updateValue('language', e?.target.value)}
              >
                <MenuItem value="tr">Turkish</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </CustomSelect>

          </Grid>
          <Grid item xs={6} lg={4}>
            <CustomFormLabel  sx={{mt:0}} htmlFor="language">&nbsp;</CustomFormLabel>
            <Button variant="contained" sx={{mr: 1}}>{t('i.Select')}</Button>
            <Button variant="contained">{t('i.Save')}</Button>
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="title">{t('pages.tools.bulk-message.Title')}</CustomFormLabel>
            <CustomTextField
              id="title"
              name="title"
              placeholder={t('pages.tools.bulk-message.TitlePlaceholder')}
              variant="outlined"
              fullWidth
              value={value?.title}
              onChange={(e) => updateValue('title', e?.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomFormLabel sx={{mt:0}}  htmlFor="text">{t('pages.tools.bulk-message.Description')}</CustomFormLabel>
            <ReactQuill
              placeholder={t('pages.tools.bulk-message.DescriptionPlaceholder')}
              value={value?.text}
            />
          </Grid>
          <Grid item xs={4}>
              <CustomFormLabel htmlFor="descriptionText">{t('pages.tools.bulk-message.Image')}</CustomFormLabel>
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
              <Box mt={2} dangerouslySetInnerHTML={{ __html: t('pages.tools.bulk-message.ImageUploadText') }} >{}</Box>
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
          <Box className={"flex justify-end"}>
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
      </Dialog>
    </Fragment>
  );
}

export default memo(ActionModal);