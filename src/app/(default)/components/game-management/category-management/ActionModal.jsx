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
      <Tooltip title={t(`pages.game-management.category-management.${id ? "editCategory" : "addNewCategory"}`)}>
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
        title={t(`pages.game-management.category-management.${id ? "editCategory" : "addNewCategory"}`)}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.user-management.game-management.categoryName')}</CustomFormLabel>
                  <CustomTextField
                    id="categoryName"
                    name="categoryName"
                    variant="outlined"
                    fullWidth
                    value={value?.categoryName}
                    onChange={(e) => updateValue('categoryName', e?.target.value)}
                  />
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.user-management.game-management.categoryOrder')}</CustomFormLabel>
                <CustomTextField
                  id="categoryOrder"
                  name="categoryOrder"
                  variant="outlined"
                  fullWidth
                  value={value?.categoryOrder}
                  onChange={(e) => updateValue('categoryOrder', e?.target.value)}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="category">{t('pages.game-management.category-management.categoryIcon')}</CustomFormLabel>
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
                  <VisuallyHiddenInput name="file" id="file" type="file" onChange={(e) => updateValue("icon", e?.target?.files)} />
                </Button>
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
                    }}>{t(id ? "i.Save" :`pages.game-management.category-management.${"addNewCategory"}`)}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(ActionModal);
