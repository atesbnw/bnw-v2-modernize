import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import {FormControl, InputAdornment, MenuItem} from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import TimeTabs from "@/app/components/shared/TimeTabs";
import { Autocomplete } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const language = [
  { title: 'English' },
  { title: 'Turkish' },
  { title: 'German' },
  { title: 'French' },
  { title: 'Spanish' },
];

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);
  const [createDate, setCreateDate] = React.useState(dayjs());
  const [updateDate, setUpdateDate] = React.useState(dayjs());

  return (
    <Fragment>
      <Button color="primary" startIcon={<IconFilter width={18} />} onClick={() => setOpen(true)}>
        {t('i.Filter')}
      </Button>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('i.ClearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter()
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t("pages.tools.operators.Bulk Message")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t('pages.tools.operators.Search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.tools.operators.searchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="role">{t('pages.tools.operators.Role')}</CustomFormLabel>
                <CustomSelect
                  id="role"
                  name="role"
                  fullWidth
                  value={filter?.role}
                  onChange={(e) => updateFilter('role', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="createDate">{t('pages.tools.operators.Create Date')}</CustomFormLabel>
                <FormControl sx={{width: '100%'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                    <DateTimePicker
                      value={createDate}
                      onChange={(newValue) => {
                        setCreateDate(newValue);
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
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="createdBy">{t('pages.tools.operators.Created By')}</CustomFormLabel>
                <CustomSelect
                  id="createdBy"
                  name="createdBy"
                  fullWidth
                  value={filter?.createdBy}
                  onChange={(e) => updateFilter('createdBy', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="updateDate">{t('pages.tools.operators.Last Update Date')}</CustomFormLabel>
                <FormControl sx={{width: '100%'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"} >
                    <DateTimePicker
                      value={updateDate}
                      onChange={(newValue) => {
                        setUpdateDate(newValue);
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
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="updatedBy">{t('pages.tools.operators.Updated By')}</CustomFormLabel>
                <CustomSelect
                  id="updatedBy"
                  name="updatedBy"
                  fullWidth
                  value={filter?.updatedBy}
                  onChange={(e) => updateFilter('updatedBy', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>

            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button
              fullWidth
              variant='contained'
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}>{t('i.Filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
