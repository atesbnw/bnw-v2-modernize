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
                <TimeTabs justify={"start"} onChange={(time) => updateFilter("timeRange", time)} value={filter?.timeRange} />
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="transactionType">{t('pages.reports.finance-reports.Transaction Type')}</CustomFormLabel>
                <CustomSelect
                  id="transactionType"
                  name="transactionType"
                  fullWidth
                  variant="outlined"
                  value={filter?.provider || 'all'}
                  onChange={(e) => updateFilter('transactionType', e?.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="operator">{t('pages.reports.finance-reports.Operator')}</CustomFormLabel>
                <CustomSelect
                  id="operator"
                  name="operator"
                  fullWidth
                  variant="outlined"
                  value={filter?.category || []}
                  onChange={(e) => updateFilter('operator', e?.target.value)}
                  multiple
                >
                  <MenuItem value="all">All</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} className={"pt-0"}>
                <CustomFormLabel
                  htmlFor="won">{t('pages.reports.finance-reports.Total Deposit')}</CustomFormLabel>
                <Stack direction={"row"} className={"gap-2"}>
                  <CustomTextField
                    id="won_min"
                    name="won_min"
                    placeholder={t('pages.reports.user-reports.min')}
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={filter?.won_min}
                    onChange={(e) => updateFilter('won_min', e?.target.value)}
                  />
                  <CustomTextField
                    id="won_max"
                    name="won_max"
                    placeholder={t('pages.reports.user-reports.max')}
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={filter?.won_max}
                    onChange={(e) => updateFilter('won_max', e?.target.value)}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} className={"pt-0"}>
                <CustomFormLabel
                  htmlFor="diff">{t('pages.reports.finance-reports.Total Withdraw')}</CustomFormLabel>
                <Stack direction={"row"} className={"gap-2"}>
                  <CustomTextField
                    id="diff_min"
                    name="diff_min"
                    placeholder={t('pages.reports.user-reports.min')}
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={filter?.diff_min}
                    onChange={(e) => updateFilter('diff_min', e?.target.value)}
                  />
                  <CustomTextField
                    id="diff_max"
                    name="diff_max"
                    placeholder={t('pages.reports.user-reports.max')}
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={filter?.diff_max}
                    onChange={(e) => updateFilter('diff_max', e?.target.value)}
                  />
                </Stack>
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
