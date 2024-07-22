 import React, { memo, useState, useCallback, Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX, IconPencil, IconPlus } from '@tabler/icons-react';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import TimeTabs from '@/app/components/shared/TimeTabs';
import { CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
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
      <Tooltip title={t(`pages.game-management.admin-address.${id ? "editCategory" : "addNewAdminAddress"}`)}>
        {id ? (
          <IconButton color={'primary'} onClick={() => setOpen(true)}>
            <IconPencil />
          </IconButton>
        ) : (
          <IconButton color={"primary"} onClick={() => setOpen(true)}>
            <IconPlus />
          </IconButton>
        )}
      </Tooltip>


      <SideDialog
        title={t(`pages.game-management.admin-address.${id ? "editAdminAddress" : "addNewAdminAddress"}`)}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="provider">{t('pages.game-management.admin-address.provider')}</CustomFormLabel>
                <CustomSelect
                  id="provider"
                  name="provider"
                  fullWidth
                  value={value?.provider || "active"}
                  onChange={(e) => updateValue('provider', e?.target.value)}
                  variant="outlined"
                >
                  <MenuItem value="Egt">EGT</MenuItem>
                  <MenuItem value="Invision">İnvision</MenuItem>
                </CustomSelect>
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="backofficeUrl">{t('pages.game-management.admin-address.backofficeUrl')}</CustomFormLabel>
                  <CustomTextField
                    id="backofficeUrl"
                    name="backofficeUrl"
                    variant="outlined"
                    fullWidth
                    value={value?.backofficeUrl}
                    onChange={(e) => updateValue('backofficeUrl', e?.target.value)}
                  />
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="username">{t('pages.game-management.admin-address.username')}</CustomFormLabel>
                  <CustomTextField
                    id="username"
                    name="username"
                    variant="outlined"
                    fullWidth
                    value={value?.username}
                    onChange={(e) => updateValue('username', e?.target.value)}
                  />
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="password">{t('pages.game-management.admin-address.password')}</CustomFormLabel>
                  <CustomTextField
                    id="password"
                    name="password"
                    variant="outlined"
                    fullWidth
                    value={value?.password}
                    onChange={(e) => updateValue('password', e?.target.value)}
                  />
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="note">{t('pages.game-management.admin-address.note')}</CustomFormLabel>
                  <CustomTextField
                    id="note"
                    name="note"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={value?.note}
                    onChange={(e) => updateValue('note', e?.target.value)}
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
                    }}>{t(id ? "i.Save" :`pages.game-management.admin-address.${"addNewAdminAddress"}`)}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
