import React, {memo, useState, useCallback, Fragment, useEffect} from 'react';
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
import {IconFilter, IconFilterX, IconPencil} from '@tabler/icons-react';
import TimeTabs from "@/app/components/shared/TimeTabs";
import { Autocomplete } from '@mui/material';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';

function ActionModal({id, data}) {
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
      {id ? (
        <IconButton onClick={() => setOpen(true)}>
          <IconPencil />
        </IconButton>
      ) : (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {t('pages.domain-management.domain-management.Add Domain')}
        </Button>
      )}

      <SideDialog
        title={
          id ? (
              t('pages.domain-management.domain-management.Edit Domain')
            ) : (
              t('pages.domain-management.domain-management.Add Domain')
            )}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="zoneAddress">{t('pages.domain-management.domain-management.Domain Name')}</CustomFormLabel>
                <CustomTextField
                  id="zoneAddress"
                  name="zoneAddress"
                  variant="outlined"
                  fullWidth
                  value={value?.zoneAddress}
                  onChange={(e) => updateValue('zoneAddress', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="mobile">{t('pages.domain-management.domain-management.mobile')}</CustomFormLabel>
                <CustomSelect
                  id="mobile"
                  name="mobile"
                  fullWidth
                  variant="outlined"
                  value={value?.mobile}
                  onChange={(e) => updateValue('mobile', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="merchant">{t('pages.domain-management.domain-management.merchant')}</CustomFormLabel>
                <CustomSelect
                  id="merchant"
                  name="merchant"
                  fullWidth
                  variant="outlined"
                  value={value?.merchant}
                  onChange={(e) => updateValue('merchant', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="www">{t('pages.domain-management.domain-management.www')}</CustomFormLabel>
                <CustomSelect
                  id="www"
                  name="www"
                  fullWidth
                  variant="outlined"
                  value={value?.www}
                  onChange={(e) => updateValue('www', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="ssl">{t('pages.domain-management.domain-management.ssl')}</CustomFormLabel>
                <CustomSelect
                  id="ssl"
                  name="ssl"
                  fullWidth
                  variant="outlined"
                  value={value?.ssl}
                  onChange={(e) => updateValue('ssl', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="firewall">{t('pages.domain-management.domain-management.firewall')}</CustomFormLabel>
                <CustomSelect
                  id="firewall"
                  name="firewall"
                  fullWidth
                  variant="outlined"
                  value={value?.firewall}
                  onChange={(e) => updateValue('firewall', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="underAttackMode">{t('pages.domain-management.domain-management.underAttackMode')}</CustomFormLabel>
                <CustomSelect
                  id="underAttackMode"
                  name="underAttackMode"
                  fullWidth
                  variant="outlined"
                  value={value?.underAttackMode}
                  onChange={(e) => updateValue('underAttackMode', e?.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Passive">Passive</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="status">{t('pages.domain-management.domain-management.status')}</CustomFormLabel>
                <CustomSelect
                  id="status"
                  name="status"
                  fullWidth
                  variant="outlined"
                  value={value?.status}
                  onChange={(e) => updateValue('status', e?.target.value)}
                >
                  <MenuItem value="true">Active</MenuItem>
                  <MenuItem value="false">Passive</MenuItem>
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
                setOpen(false);
              }}>{t('i.Save')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
