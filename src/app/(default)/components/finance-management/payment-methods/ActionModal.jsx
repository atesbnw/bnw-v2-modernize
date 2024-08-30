import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
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
import { IconChevronRight, IconCloudUpload, IconPencil, IconPlus } from '@tabler/icons-react';
import {CloudUpload} from "@mui/icons-material";
import dayjs from "dayjs";
import {styled} from "@mui/material/styles";
import SideDialog from '@/app/components/shared/SideDialog';
import InputAdornment from '@mui/material/InputAdornment';


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

function ActionModal({id, data}) {

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
          {t('pages.accounting-management.addMethod')}
        </Button>
      )}

      <SideDialog
        title={t(`pages.accounting-management.${id ? "editMethod" : "createMethod"}`)}
        open={open}
        onClose={handleClose}
        content={(
          <Grid container spacing={3} className={"px-2 py-6"}>

            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="methodName">{t('pages.accounting-management.methodName')}</CustomFormLabel>
              <CustomTextField
                id="methodName"
                name="methodName"
                placeholder={t('pages.accounting-management.methodName')}
                variant="outlined"
                fullWidth
                value={data?.methodName}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomFormLabel sx={{mt:0}} htmlFor="category">{t('pages.accounting-management.category')}</CustomFormLabel>
              <CustomTextField
                id="category"
                name="category"
                placeholder={t('pages.accounting-management.category')}
                variant="outlined"
                fullWidth
                value={data?.category}
                disabled={!!id}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomFormLabel sx={{mt:0}} htmlFor="category">{t('pages.accounting-management.provider')}</CustomFormLabel>
              <CustomTextField
                id="provider"
                name="provider"
                placeholder={t('pages.accounting-management.provider')}
                variant="outlined"
                fullWidth
                value={data?.provider}
                disabled={!!id}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomFormLabel  sx={{mt:0}} htmlFor="depositGroup">{t('pages.accounting-management.depositGroup')}</CustomFormLabel>
              <CustomSelect
                id="depositGroup"
                name="depositGroup"
                fullWidth
                variant="outlined"
                value={value?.depositGroup}
                onChange={(e) => updateValue('depositGroup', e?.target.value)}
              >
                <MenuItem value={value?.depositGroup}>{value?.depositGroup}</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </CustomSelect>

            </Grid>



            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="minAmount">{t('pages.accounting-management.minAmount')}</CustomFormLabel>
              <CustomTextField
                id="minAmount"
                name="minAmount"
                placeholder={t('pages.accounting-management.minAmount')}
                variant="outlined"
                fullWidth
                value={data?.minAmount}
                endAdornment={<InputAdornment position="end">₺</InputAdornment>}
              />
            </Grid>

            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="minAmount">{t('pages.accounting-management.maxAmount')}</CustomFormLabel>
              <CustomTextField
                id="maxAmount"
                name="maxAmount"
                placeholder={t('pages.accounting-management.maxAmount')}
                variant="outlined"
                fullWidth
                value={data?.maxAmount}
                endAdornment={<InputAdornment position="end">₺</InputAdornment>}
              />
            </Grid>

            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="minAmount">{t('pages.accounting-management.transactionTime')}</CustomFormLabel>
              <CustomTextField
                id="transactionTime"
                name="transactionTime"
                placeholder={t('pages.accounting-management.transactionTime')}
                variant="outlined"
                fullWidth
                value={data?.transactionTime}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomFormLabel htmlFor="descriptionText">{t('pages.accounting-management.logo')}</CustomFormLabel>
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
              <Box mt={2} dangerouslySetInnerHTML={{ __html: t('pages.tools.announcements.ImageUploadText') }} >{}</Box>
            </Grid>
          </Grid>
        )}
        actionButtons={(
          <Fragment>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}>{t("i.Save")}</Button>
            {/*<Button*/}
            {/*  variant={"contained"}*/}
            {/*  onClick={() => {*/}
            {/*    setOpen(false);*/}
            {/*  }}>{t('pages.accounting-management.actions.cancel')}</Button>*/}
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
