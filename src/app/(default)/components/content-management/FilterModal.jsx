import React, { memo, useState, useCallback, Fragment } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { t } from 'i18next';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import SideDialog from '@/app/components/shared/SideDialog';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IconFilter, IconFilterX } from '@tabler/icons-react';
import Stack from '@mui/material/Stack';
import TimeTabs from '@/app/components/shared/TimeTabs';

function FilterModal({ filter, updateFilter, resetFilter, onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button color="primary" startIcon={<IconFilter width={18} />} onClick={() => setOpen(true)}>
        {t('i.Filter')}
      </Button>

      {Object.values(filter)?.some(Boolean) && (
        <Tooltip title={t('pages.operator-management.operator-management.clearAllFilter')}>
          <IconButton color={'error'} onClick={() => {
            resetFilter && resetFilter()
            setOpen(false);
          }}>
            <IconFilterX />
          </IconButton>
        </Tooltip>
      )}

      <SideDialog
        title={t("pages.operator-management.operator-management.filter")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12}>
                <CustomFormLabel
                  htmlFor="searchText">{t('pages.content-management.search')}</CustomFormLabel>
                <CustomTextField
                  id="searchText"
                  name="searchText"
                  placeholder={t('pages.content-management.search')}
                  variant="outlined"
                  fullWidth
                  value={filter?.searchText}
                  onChange={(e) => updateFilter('searchText', e?.target.value)}
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="platform">{t('pages.content-management.platform')}</CustomFormLabel>
                <CustomSelect
                  id="platform"
                  name="platform"
                  fullWidth
                  variant="outlined"
                  value={filter?.platform || "all"}
                  onChange={(e) => updateFilter('platform', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="Desktop">Desktop</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                </CustomSelect>
              </Grid>

              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="language">{t('pages.content-management.language')}</CustomFormLabel>
                <CustomSelect
                  id="language"
                  name="language"
                  fullWidth
                  variant="outlined"
                  value={filter?.language || "all"}
                  onChange={(e) => updateFilter('language', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="turkish">Turkish</MenuItem>
                  <MenuItem value="english">English</MenuItem>
                </CustomSelect>
              </Grid>





            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button
              variant={"contained"}
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}>{t('pages.operator-management.operator-management.filter')}</Button>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
