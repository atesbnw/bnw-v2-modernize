import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { InputAdornment, MenuItem, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import TimeTabs from "@/app/components/shared/TimeTabs";
import { Autocomplete } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import top100Films from '@/app/components/forms/form-elements/autoComplete/data';
import TextField from '@mui/material/TextField';

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
                  placeholder={t('pages.tools.bonus.SearchPlaceholder')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="gameCategory">{t('pages.tools.bonus.Game Category')}</CustomFormLabel>
                <Autocomplete
                  multiple
                  id="gameCategory"
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
                    <CustomTextField {...params} placeholder={t('pages.tools.bonus.Game Category')} aria-label={t('pages.tools.bonus.Game Category')} />
                  )}
                />
              </Grid>


              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="Wager">{t('pages.tools.bonus.Wager')}</CustomFormLabel>
                <CustomSelect
                  id="Wager"
                  name="Wager"
                  fullWidth
                  value={filter?.Wager || []}
                  onChange={(e) => updateFilter('Wager', e?.target.value)}
                  variant="outlined"
                  multiple={true}
                >
                  <MenuItem value="Çevrimli">Çevrimli</MenuItem>
                  <MenuItem value="Çevrimsiz">Çevrimsiz</MenuItem>
                </CustomSelect>
              </Grid>

              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="operator">{t('pages.tools.bonus.Operator')}</CustomFormLabel>
                <CustomSelect
                  id="operator"
                  name="operator"
                  fullWidth
                  value={filter?.operator}
                  onChange={(e) => updateFilter('operator', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="targetUser">{t('pages.tools.bonus.targetUser')}</CustomFormLabel>
                <CustomSelect
                  id="targetUser"
                  name="targetUser"
                  fullWidth
                  value={filter?.targetUser}
                  onChange={(e) => updateFilter('targetUser', e?.target.value)}
                  variant="outlined"
                >
                  {['VIP', 'Yeni Üye', 'Sadık Üye'].map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </CustomSelect>
              </Grid>

              <Grid item xs={12} sm={12} lg={12}>
                <CustomFormLabel
                  htmlFor="BonusAmount">{t('pages.tools.bonus.Bonus Amount')}</CustomFormLabel>

                <Stack direction="row" spacing={2} alignItems="center">

                <Stack direction="row" spacing={1} alignItems="center">
                  <Box> {t(`pages.tools.bonus.min`)} </Box>
                  <TextField
                    type="number"
                    name={`bonusAmountMin`}
                    value={filter.bonusAmountMin}
                    onChange={(e) => updateFilter('bonusAmountMin', e?.target.value)}

                    InputProps={{
                      endAdornment: <InputAdornment position="end">₺</InputAdornment>,
                    }}
                  />
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Box> {t(`pages.tools.bonus.max`)} </Box>
                  <TextField
                    type="number"
                    name={`bonusAmountMax`}
                    value={filter.bonusAmountMax}
                    onChange={(e) => updateFilter('bonusAmountMax', e?.target.value)}

                    InputProps={{
                      endAdornment: <InputAdornment position="end">₺</InputAdornment>,
                    }}
                  />
                </Stack>


                </Stack>

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
