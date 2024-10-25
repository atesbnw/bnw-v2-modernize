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

function GameActionModal({id, data}) {
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
              t('pages.user-management.game-management.Edit Game')
            ) : (
              t('pages.user-management.game-management.Add Game')
            )}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>

              <Grid item xs={12}>
                <CustomFormLabel htmlFor="gameName">{t('pages.user-management.game-management.gameName')}</CustomFormLabel>
                <CustomTextField
                  id="gameName"
                  name="gameName"
                  variant="outlined"
                  fullWidth
                  value={value?.gameName}
                  onChange={(e) => updateValue('gameName', e?.target.value)}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="category">{t('pages.user-management.game-management.category')}</CustomFormLabel>
                <CustomSelect
                  id="category"
                  name="category"
                  fullWidth
                  variant="outlined"
                  value={value?.category}
                  onChange={(e) => updateValue('category', e?.target.value)}
                >
                  {['Popular Slots', 'Video Slots', 'no category','New Games']?.map((ite) => (
                    <MenuItem value={ite} key={ite}>{ite}</MenuItem>
                    ))}
                </CustomSelect>
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="homeOrder">{t('pages.user-management.game-management.homeOrder')}</CustomFormLabel>
                <CustomTextField
                  id="homeOrder"
                  name="homeOrder"
                  variant="outlined"
                  fullWidth
                  value={value?.homeOrder}
                  onChange={(e) => updateValue('homeOrder', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="lobbyOrder">{t('pages.user-management.game-management.lobbyOrder')}</CustomFormLabel>
                <CustomTextField
                  id="lobbyOrder"
                  name="lobbyOrder"
                  variant="outlined"
                  fullWidth
                  value={value?.lobbyOrder}
                  onChange={(e) => updateValue('lobbyOrder', e?.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomFormLabel htmlFor="descriptionText">{t('pages.user-management.game-management.gameImage')}</CustomFormLabel>
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
                  <VisuallyHiddenInput name="gameImage" id="file" type="file" />
                </Button>
                <Box mt={2} dangerouslySetInnerHTML={{ __html: t('pages.tools.bulk-message.ImageUploadText') }} >{}</Box>
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

export default memo(GameActionModal);
