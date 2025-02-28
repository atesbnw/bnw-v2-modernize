import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import {InputAdornment, MenuItem} from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import TimeTabs from "@/app/components/shared/TimeTabs";
import { Autocomplete } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import top100Films from '@/app/components/forms/form-elements/autoComplete/data';

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
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="bonusType">{t('pages.tools.bonus.Bonus Type')}</CustomFormLabel>
                <CustomSelect
                  id="bonusType"
                  name="bonusType"
                  fullWidth
                  value={filter?.bonusType}
                  onChange={(e) => updateFilter('bonusType', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="bonusCategory">{t('pages.tools.bonus.Bonus Category')}</CustomFormLabel>
                <CustomSelect
                  id="bonusCategory"
                  name="bonusCategory"
                  fullWidth
                  value={filter?.bonusCategory}
                  onChange={(e) => updateFilter('bonusCategory', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="option">Option</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="Wager">{t('pages.tools.bonus.Wager')}</CustomFormLabel>
                <CustomSelect
                  id="Wager"
                  name="Wager"
                  fullWidth
                  value={filter?.wager || []}
                  onChange={(e) => updateFilter('wager', e?.target.value)}
                  variant="outlined"
                  multiple={true}
                >
                  <MenuItem value="Çevrimli">Çevrimli</MenuItem>
                  <MenuItem value="Çevrimsiz">Çevrimsiz</MenuItem>
                </CustomSelect>
              </Grid>


              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="bonusPercents">{t('pages.tools.bonus.bonusPercents')}</CustomFormLabel>
                <CustomSelect
                  id="bonusPercents"
                  name="bonusPercents"
                  fullWidth
                  value={filter?.bonusPercents || []}
                  onChange={(e) => updateFilter('bonusPercents', e?.target.value)}
                  variant="outlined"
                  multiple={true}
                >
                  {['%1-10', "%10-20", "%20-30", "%30-40", "%40-50", "%50-60", "%60-70", "%70-80", "%80-90", "%90-100"].map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}

                </CustomSelect>
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
                  htmlFor="paymentMethod">{t('pages.tools.bonus.paymentMethod')}</CustomFormLabel>
                <CustomSelect
                  id="paymentMethod"
                  name="paymentMethod"
                  fullWidth
                  value={filter?.paymentMethod || []}
                  onChange={(e) => updateFilter('paymentMethod', e?.target.value)}
                  variant="outlined"
                  multiple={true}
                >
                  {["Papara", "Payfix","Havale"].map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))}

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
                  htmlFor="status">{t('pages.tools.bonus.Status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  value={filter?.status}
                  onChange={(e) => updateFilter('status', e?.target.value)}
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
              <Grid item xs={6}>
                <CustomFormLabel
                  htmlFor="ipCheck">{t('pages.tools.bonus.ipCheck')}</CustomFormLabel>
                <CustomSelect
                  id="ipCheck"
                  name="ipCheck"
                  fullWidth
                  value={filter?.ipCheck}
                  onChange={(e) => updateFilter('ipCheck', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
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
