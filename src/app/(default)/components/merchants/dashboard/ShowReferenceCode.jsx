import React, { memo, useState, useCallback, Fragment } from 'react';
import { t } from 'i18next';
import SideDialog from '@/app/components/shared/SideDialog';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button,Grid  } from '@mui/material';

function ShowReferenceCode() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [referenceCode, setReferenceCode] = useState("http://bnwaff.com/?code=6661881");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referenceCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <Fragment>
      <Button variant={'contained'} onClick={() => setOpen(true)}>
        {t('pages.merchants.dashboard.Show Reference Code')}
      </Button>

        <SideDialog
          title={t("pages.merchants.dashboard.Show Reference Code")}
          open={open}
          onClose={() => setOpen(false)}
          content={!loading && (
            <Grid container spacing={1}>
              <Grid item sm={12} xs={12}>
                <CustomFormLabel
                  htmlFor="balance">{t('pages.merchants.dashboard.Reference Code')}</CustomFormLabel>
                <CustomTextField
                  id="notes"
                  name="notes"
                  variant="outlined"
                  multiline
                  rows={2}
                  fullWidth
                  value={referenceCode}
                  disabled
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <Button variant="contained" onClick={handleCopy} color={copied ? "success" : "primary"} fullWidth>
                  { copied ? (t('i.Copied!')) : (t('i.Copy')) }
                </Button>
              </Grid>
            </Grid>
          ) || (
            <Box className={"w-full h-full flex items-center justify-center"}>
              <CircularProgress />
            </Box>
          )}
        />
    </Fragment>
  );
}

export default memo(ShowReferenceCode);
