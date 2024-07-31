"use client";
import React, {memo, useState, useCallback, useMemo, Fragment} from 'react';
import { t } from 'i18next';
import TitleBar from "@/app/components/TitleBar";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import {Box, Grid, Card, Button, TextField, Typography, CardContent, CardActions} from "@mui/material";

function Page() {

  return (
    <Fragment>
      <Box className={"flex flex-col gap-4"}>
        <TitleBar
          title={t('pages.user-management.user_management_dashboard.Privacy Info Page.Privacy Information')}
        />

        <Grid container spacing={2} direction="row"
              justifyContent="space-around"
              alignItems="stretch">
          <Grid item xs={12} sm={4} >
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1}}>
                <Typography variant="h5">{t('pages.user-management.user_management_dashboard.Privacy Info Page.resetPassword')}</Typography>
                <Button variant="outlined" color="primary" sx={{ marginTop: '10px' }} fullWidth>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.generatePassword')}
                </Button>
                <Typography variant="subtitle2" sx={{ marginTop: '20px', textAlign:'center' }}>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.orEnterYourOwn')}
                </Typography>
                <TextField
                  label={t('pages.user-management.user_management_dashboard.Privacy Info Page.newPassword')}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label={t('pages.user-management.user_management_dashboard.Privacy Info Page.repeatPassword')}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <Typography variant="caption" display="block" gutterBottom>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.passwordCriteria')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.savePassword')}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1}}>
                <Typography variant="h5">{t('pages.user-management.user_management_dashboard.Privacy Info Page.sendPasswordLink')}</Typography>
                <Typography variant="caption" display="block"  my={2}>{t('pages.user-management.user_management_dashboard.Privacy Info Page.sendPasswordLinkText')}</Typography>
                <CustomFormLabel htmlFor="region">{t('pages.user-management.user_management_dashboard.Privacy Info Page.linkInfo')}</CustomFormLabel>
                <TextField
                  fullWidth
                  defaultValue="http://example.com/reset_password/token/sad8"
                />
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.sendLink')}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1}}>
                <Typography variant="h5">{t('pages.user-management.user_management_dashboard.Privacy Info Page.twoFactorAuthentication')}</Typography>
                <Box sx={{textAlign:'center'}}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Google_Authenticator_for_Android_icon.svg/296px-Google_Authenticator_for_Android_icon.svg.png"
                    alt="Google Authenticator"
                    style={{ width: '200px', height: '200px', marginTop: '50px'}}
                  />
                </Box>
              </CardContent>

              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  {t('pages.user-management.user_management_dashboard.Privacy Info Page.disconnectAuthenticator')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default memo(Page);
