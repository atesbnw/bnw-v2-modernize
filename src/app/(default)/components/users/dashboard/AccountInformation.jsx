import React, {Fragment} from 'react';
import {Grid, Typography,Card, CardContent, Box } from '@mui/material';
import { t } from 'i18next';
import PlayerInfoHeader from "@/app/(default)/components/users/PlayerInfoHeader";

const personalInfo = [
  { title: 'pages.user-management.user_management_dashboard.Full Name', value: 'Eren Erdi' },
  { title: 'pages.user-management.user_management_dashboard.Date of Birth', value: '24/09/1990' },
  { title: 'pages.user-management.user_management_dashboard.Place of Birth', value: 'Zonguldak' },
  { title: 'pages.user-management.user_management_dashboard.Document Number', value: '12345612 978' },
  { title: 'pages.user-management.user_management_dashboard.Document Type', value: 'T.C. Kimlik' },
  { title: 'pages.user-management.user_management_dashboard.Gender', value: 'Male' }
];

const accountInfo = [
  { title: 'pages.user-management.user_management_dashboard.Player ID', value: '11297035' },
  { title: 'pages.user-management.user_management_dashboard.Username', value: 'erenerdibnw' },
  { title: 'pages.user-management.user_management_dashboard.Registration Date', value: '02/06/2021 16:34' },
  { title: 'pages.user-management.user_management_dashboard.Currency', value: 'Turkish Lira (₺)' },
  { title: 'pages.user-management.user_management_dashboard.Language', value: 'Turkish' },
  { title: 'pages.user-management.user_management_dashboard.Dealer Code', value: '3435' },
  { title: 'pages.user-management.user_management_dashboard.Promotion Code', value: 'BELESCI40' }
];

const contactInfo = [
  { title: 'pages.user-management.user_management_dashboard.Phone', value: '+90 (532) 235 66 00' },
  { title: 'pages.user-management.user_management_dashboard.Email', value: 'er****103@gmail.com' },
  { title: 'pages.user-management.user_management_dashboard.Country', value: 'Turkey' },
  { title: 'pages.user-management.user_management_dashboard.Region', value: '-' },
  { title: 'pages.user-management.user_management_dashboard.City', value: 'Istanbul' },
  { title: 'pages.user-management.user_management_dashboard.Postal Code', value: '34560' },
  { title: 'pages.user-management.user_management_dashboard.Address', value: 'Hacıahmet Mah. No: 24/3 Ümraniye' },
  { title: 'pages.user-management.user_management_dashboard.Contact Preferences', value: 'SMS, Email' }
];

function AccountInformation() {
  return (
    <Fragment>

      <PlayerInfoHeader>
        <Typography variant="h3" component="div">{t('pages.user-management.user_management_dashboard.Account')}</Typography>
      </PlayerInfoHeader>
      <Grid container spacing={3} className={"mt-2"}>
        <Grid item sm={12} md={1}>
          <img
            src='https://via.placeholder.com/100x100'
            className={"h-20 aspect-square object-contain bg-white rounded-xl p-1"}
          />
        </Grid>
        <Grid item sm={12} md={3} spacing={6}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.user-management.user_management_dashboard.Personal Information')}</Typography>
          {personalInfo.map((item, index) => (
            <Box className={"flex mb-3"}>
              <Typography className={"w-1/2 "} key={index}><strong>{t(item.title)}:</strong></Typography>
              <Typography className={"w-1/2"} key={index}>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.user-management.user_management_dashboard.Account Information')}</Typography>
          {accountInfo.map((item, index) => (
            <Box className={"flex mb-3"}>
              <Typography className={"w-1/2"} key={index}><strong>{t(item.title)}:</strong></Typography>
              <Typography className={"w-1/2"} key={index}>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.user-management.user_management_dashboard.Contact Information')}</Typography>
          {contactInfo.map((item, index) => (
            <Box className={"flex mb-3"}>
              <Typography className={"w-1/2"} key={index}><strong>{t(item.title)}:</strong></Typography>
              <Typography className={"w-1/2"} key={index}>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default AccountInformation;