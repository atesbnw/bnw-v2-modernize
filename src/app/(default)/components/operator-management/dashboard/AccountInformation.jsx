import React, {Fragment} from 'react';
import {Grid, Typography,Card, CardContent, Box } from '@mui/material';
import { t } from 'i18next';
import Button from "@mui/material/Button";

const personalInfo = [
  { title: 'pages.merchants.dashboard.Full Name', value: 'Eren Erdi' },
  { title: 'pages.merchants.dashboard.Date of Birth', value: '24/09/1990' },
  { title: 'pages.merchants.dashboard.Place of Birth', value: 'Zonguldak' },
  { title: 'pages.merchants.dashboard.Document Number', value: '12345612 978' },
  { title: 'pages.merchants.dashboard.Document Type', value: 'T.C. Kimlik' },
  { title: 'pages.merchants.dashboard.Gender', value: 'Male' }
];

const accountInfo = [
  { title: 'pages.merchants.dashboard.Player ID', value: '11297035' },
  { title: 'pages.merchants.dashboard.Username', value: 'erenerdibnw' },
  { title: 'pages.merchants.dashboard.Registration Date', value: '02/06/2021 16:34' },
  { title: 'pages.merchants.dashboard.Currency', value: 'Turkish Lira (₺)' },
  { title: 'pages.merchants.dashboard.Language', value: 'Turkish' },
  // { title: 'pages.merchants.dashboard.Dealer Code', value: '3435' },
  // { title: 'pages.merchants.dashboard.Promotion Code', value: 'BELESCI40' }
];

const contactInfo = [
  { title: 'pages.merchants.dashboard.Phone', value: '+90 (532) 235 66 00' },
  { title: 'pages.merchants.dashboard.Email', value: 'er****103@gmail.com' },
  { title: 'pages.merchants.dashboard.Country', value: 'Turkey' },
  { title: 'pages.merchants.dashboard.Region', value: '-' },
  { title: 'pages.merchants.dashboard.City', value: 'Istanbul' },
  { title: 'pages.merchants.dashboard.Postal Code', value: '34560' },
  { title: 'pages.merchants.dashboard.Address', value: 'Hacıahmet Mah. No: 24/3 Ümraniye' },
  { title: 'pages.merchants.dashboard.Contact Preferences', value: 'SMS, Email' }
];

function AccountInformation() {
  return (
    <Fragment>
      <Grid container rowSpacing={0} columnSpacing={3} className={"mt-2"}>
        <Grid item sm={12} md={1}>
          <img
            src='https://via.placeholder.com/100x100'
            className={"h-20 aspect-square object-contain bg-white rounded-xl p-1"}
          />
          <Button fullWidth>{t('i.Edit')}</Button>
        </Grid>
        <Grid item sm={12} md={3} spacing={6}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.merchants.dashboard.Personal Information')}</Typography>
          {personalInfo.map((item, index) => (
            <Box className={"flex mb-3"}>
              <Typography className={"w-1/2 "} key={index}><strong>{t(item.title)}:</strong></Typography>
              <Typography className={"w-1/2"} key={index}>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.merchants.dashboard.Account Information')}</Typography>
          {accountInfo.map((item, index) => (
            <Box className={"flex mb-3"}>
              <Typography className={"w-1/2"} key={index}><strong>{t(item.title)}:</strong></Typography>
              <Typography className={"w-1/2"} key={index}>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant="h5" className={"mb-3 font-bold"}>{t('pages.merchants.dashboard.Contact Information')}</Typography>
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
