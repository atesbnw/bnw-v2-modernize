import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { FormControl, InputAdornment, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import TimeTabs from "@/app/components/shared/TimeTabs";
import { Autocomplete } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import top100Films from '@/app/components/forms/form-elements/autoComplete/data';
import CustomOutlinedInput from '@/app/components/forms/theme-elements/CustomOutlinedInput';

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

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
        title={t("pages.user-management.user_management_user_management.filter")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <TimeTabs justify={"full"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t('pages.tools.bonus.Search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.tools.bonus.FreeSpinSearchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>



              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="NumOfSpin">{t('pages.tools.bonus.Number of FreeSpins')}</CustomFormLabel>
                <Stack  spacing={2} direction="row">
                  <CustomTextField
                    id="NumOfSpinMin"
                    name="NumOfSpinMin"
                    placeholder={t('pages.tools.bonus.min')}
                    variant="outlined"
                    fullWidth
                    value={filter?.NumOfSpinMin}
                    onChange={e => updateFilter('NumOfSpinMin', e?.target.value)}

                  />
                  <CustomTextField
                    id="NumOfSpinMax"
                    name="NumOfSpinMax"
                    placeholder={t('pages.tools.bonus.max')}
                    variant="outlined"
                    fullWidth
                    value={filter?.NumOfSpinMax}
                    onChange={e => updateFilter('NumOfSpinMax', e?.target.value)}

                  />
                </Stack>
              </Grid>


              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="NumOfSpin">{t('pages.tools.bonus.Spin per Amount')}</CustomFormLabel>
                <Stack  spacing={2} direction="row">
                  <CustomOutlinedInput
                    id="SpinPerAmountMin"
                    name="SpinPerAmountMin"
                    placeholder={t('pages.tools.bonus.min')}
                    endAdornment={<InputAdornment position="end">₺</InputAdornment>}
                    variant="outlined"
                    fullWidth
                    value={filter?.SpinPerAmountMin}
                    onChange={e => updateFilter('SpinPerAmountMin', e?.target.value)}

                  />
                  <CustomOutlinedInput
                    id="SpinPerAmountMax"
                    name="SpinPerAmountMax"
                    placeholder={t('pages.tools.bonus.max')}
                    endAdornment={<InputAdornment position="end">₺</InputAdornment>}
                    variant="outlined"
                    fullWidth
                    value={filter?.SpinPerAmountMax}
                    onChange={e => updateFilter('SpinPerAmountMax', e?.target.value)}

                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="Provider">{t('pages.tools.bonus.Provider')}</CustomFormLabel>
                <Autocomplete
                  multiple
                  id="Provider"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <CustomCheckbox style={{ marginRight: 8 }} checked={selected}  />
                      {option.title}
                    </li>
                  )}
                  fullWidth
                  renderInput={(params) => (
                    <CustomTextField {...params} placeholder={t('pages.tools.bonus.Provider')} aria-label={t('pages.tools.bonus.Provider')} />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="Game">{t('pages.tools.bonus.Game')}</CustomFormLabel>
                <Autocomplete
                  multiple
                  id="Game"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.title}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <CustomCheckbox style={{ marginRight: 8 }} checked={selected}  />
                      {option.title}
                    </li>
                  )}
                  fullWidth
                  renderInput={(params) => (
                    <CustomTextField {...params} placeholder={t('pages.tools.bonus.Game')} aria-label={t('pages.tools.bonus.Game')} />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                <FormControl className={'w-full'}>
                  <Select
                    id="targetUser"
                    name="targetUser"
                    multiple
                    value={typeof filter?.targetUser === 'string' ? filter?.targetUser.split(',') : filter?.targetUser || []}
                    onChange={(e) => updateFilter('targetUser', e?.target.value)}
                    input={<OutlinedInput />}
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
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="status">{t('pages.tools.bonus.Status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  multiple
                  value={typeof filter?.status === 'string' ? filter?.status.split(',') : filter?.status || []}
                  onChange={(e) => updateFilter('status', e?.target.value)}
                  variant="outlined"
                >
                  {['Active', 'Passive', 'Pending'].map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
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
