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

function PaymentMethodsGroupModal({id, data}) {
  const [descriptionTextState, setDescriptionTextState] = useState(`<b>Lorem Ipsum</b>`);
  const [startDateTime, setStartDateTime] = React.useState(dayjs());
  const [finishDateTime, setFinishDateTime] = React.useState(dayjs());

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
          <IconChevronRight />
        </IconButton>
      ) : (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {t('pages.accounting-management.createNewGroup')}
        </Button>
      )}

      <SideDialog
        title={t(`pages.accounting-management.${id ? "editDepositGroup" : "createDepositGroup"}`)}
        open={open}
        onClose={handleClose}
        content={(
          <Grid container spacing={3} className={"px-2 py-6"}>

            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="targetUser">{t('pages.accounting-management.groupName')}</CustomFormLabel>
              <CustomTextField
                id="groupName"
                name="groupName"
                placeholder={t('pages.accounting-management.groupName')}
                variant="outlined"
                fullWidth
                value={data?.groupName}
                disabled={!!id}
              />
            </Grid>

            <Grid item xs={12} className={"pt-0"}>
              <CustomFormLabel sx={{mt:0}} htmlFor="targetUser">{t('pages.accounting-management.groupOrder')}</CustomFormLabel>
              <CustomTextField
                id="groupOrder"
                name="groupOrder"
                type={"number"}
                placeholder={t('pages.accounting-management.groupOrder')}
                variant="outlined"
                fullWidth
                value={data?.groupOrder}
                disabled={!!id}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomFormLabel  sx={{mt:0}} htmlFor="status">{t('pages.accounting-management.status')}</CustomFormLabel>
              <CustomSelect
                id="status"
                name="status"
                fullWidth
                variant="outlined"
                value={value?.status ? "active" : "inactive"}
                onChange={(e) => updateValue('status', e?.target.value)}
                disabled={!!id}
              >
                <MenuItem value="active">{t('pages.accounting-management.active')}</MenuItem>
                <MenuItem value="inactive">{t('pages.accounting-management.inactive')}</MenuItem>
              </CustomSelect>

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

export default memo(PaymentMethodsGroupModal);
