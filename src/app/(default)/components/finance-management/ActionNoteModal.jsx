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
import TimeTabs from '@/app/components/shared/TimeTabs';
import Typography from '@mui/material/Typography';

function FilterModal({ open = false, setOpen = (open) => {}, onConfirm = () => {}, buttonText = "ok", buttonColor = "success" }) {

  return (
    <Fragment>

      <SideDialog
        title={t("pages.accounting-management.transactionNote")}
        open={open}
        onClose={() => setOpen(false)}
        content={(
          <Box>
            <Grid container spacing={1} mt={2}>
              <Grid item xs={12} className={"pt-0"}>
                <CustomTextField
                  id="transactionNote"
                  name="transactionNote"
                  placeholder={t('pages.accounting-management.transactionNotePlaceholder')}
                  // variant="outlined"
                  multiline={true}
                  rows={5}
                  fullWidth
                />
              </Grid>

              <Typography variant={"body2"} className={"pt-4"}>{t("pages.accounting-management.noteSub")}</Typography>
            </Grid>
          </Box>
        )}
        actionButtons={(
          <Fragment>
            <Button
              variant={"contained"}
              color={buttonColor}
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}>{buttonText}</Button>
            {/*<Button*/}
            {/*  variant={"contained"}*/}
            {/*  onClick={() => {*/}
            {/*    setOpen(false);*/}
            {/*  }}>{t('pages.accounting-management.actions.cancel')}</Button>*/}
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default memo(FilterModal);
