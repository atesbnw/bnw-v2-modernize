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
      <Tooltip title={t('i.Filter')}>
        <IconButton color={'primary'} onClick={() => setOpen(true)}>
          <IconFilter />
        </IconButton>
      </Tooltip>

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
        title={t("pages.tools.merchants.Bulk Message")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t('pages.tools.merchants.Search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.tools.merchants.searchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="createDate">{t('pages.tools.merchants.Create Date')}</CustomFormLabel>
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
                  htmlFor="createdBy">{t('pages.tools.merchants.Created By')}</CustomFormLabel>
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
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="minCommissionRate">{t('pages.tools.merchants.Min. Commission Rate')}</CustomFormLabel>
                <CustomTextField
                  id="minCommissionRate"
                  name="minCommissionRate"
                  placeholder="%"
                  variant="outlined"
                  fullWidth
                  value={filter?.minCommissionRate}
                  onChange={(e) => updateFilter('minCommissionRate', e?.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="maxCommissionRate">{t('pages.tools.merchants.Max. Commission Rate')}</CustomFormLabel>
                <CustomTextField
                  id="maxCommissionRate"
                  name="maxCommissionRate"
                  placeholder="%"
                  variant="outlined"
                  fullWidth
                  value={filter?.maxCommissionRate}
                  onChange={(e) => updateFilter('maxCommissionRate', e?.target.value)}
                />
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
