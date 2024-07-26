import React, { memo, useState, useCallback, Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconPencil } from '@tabler/icons-react';
import {FormControl} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function ActionModal({id, data}) {
  const [startDate, setStartDate] = React.useState(dayjs());
  const [open, setOpen] = useState(false);
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

  return (
    <Fragment>
      <Tooltip title={t('pages.settings.commission-percents.Edit Commission Rate')}>
        <IconButton onClick={() => setOpen(true)}>
          <IconPencil />
        </IconButton>
      </Tooltip>


      <SideDialog
        title={t('pages.settings.commission-percents.Edit Commission Rate')}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.settings.commission-percents.Method Name')}</CustomFormLabel>
                  <Box>{value.methodName}</Box>
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel htmlFor="startDate">{t('pages.settings.commission-percents.Commission Start Date')}</CustomFormLabel>
                <FormControl sx={{width: '100%'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => {
                        setStartDate(newValue);
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
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="commissionRate">{t('pages.settings.commission-percents.Commission Rate')}</CustomFormLabel>
                <CustomTextField
                  id="commissionRate"
                  name="commissionRate"
                  variant="outlined"
                  fullWidth
                  value={value?.commissionRate}
                  onChange={(e) => updateValue('commissionRate', e?.target.value)}
                />
              </Grid>


            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button fullWidth
                    variant={'contained'}
                    onClick={() => {
                      console.log(value)
                      setValue({})
                      setOpen(false);
                    }}>{t("i.Save")}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
