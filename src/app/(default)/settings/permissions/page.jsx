"use client";
import React, {Fragment, memo, useCallback} from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import ActionModal from "@/app/(default)/components/settings/permission/ActionModal";

const data = [
  {
    id:1,
    category:'system',
    packageTitle: 'Call Center',
    bgColor: 'info.dark',
    items: [
      {
        title: 'User Management',
        value: '8/24'
      },
      {
        title: 'Accounting Management',
        value: '4/11'
      },
      {
        title: 'Game Management',
        value: '1/15'
      },
      {
        title: 'Tools',
        value: '0/14'
      },
      {
        title: 'Settings',
        value: '1/7'
      },
      {
        title: 'Reports',
        value: '10/20'
      }
    ]
  },
  {
    id:2,
    category:'system',
    packageTitle: 'Shift Admin',
    bgColor: 'info.dark',
    items: [
      {
        title: 'User Management',
        value: '8/24'
      },
      {
        title: 'Accounting Management',
        value: '4/11'
      },
      {
        title: 'Game Management',
        value: '1/15'
      },
      {
        title: 'Tools',
        value: '0/14'
      },
      {
        title: 'Settings',
        value: '1/7'
      },
      {
        title: 'Reports',
        value: '10/20'
      }
    ]
  },
  {
    id:3,
    category:'system',
    packageTitle: 'Finance Operator',
    bgColor: 'info.dark',
    items: [
      {
        title: 'User Management',
        value: '8/24'
      },
      {
        title: 'Accounting Management',
        value: '4/11'
      },
      {
        title: 'Game Management',
        value: '1/15'
      },
      {
        title: 'Tools',
        value: '0/14'
      },
      {
        title: 'Settings',
        value: '1/7'
      },
      {
        title: 'Reports',
        value: '10/20'
      }
    ]
  },
  {
    id:4,
    category:'system',
    packageTitle: 'Finance Admin',
    bgColor: 'info.dark',
    items: [
      {
        title: 'User Management',
        value: '8/24'
      },
      {
        title: 'Accounting Management',
        value: '4/11'
      },
      {
        title: 'Game Management',
        value: '1/15'
      },
      {
        title: 'Tools',
        value: '0/14'
      },
      {
        title: 'Settings',
        value: '1/7'
      },
      {
        title: 'Reports',
        value: '10/20'
      }
    ]
  },
  {
    id:5,
    category:'customer',
    packageTitle: 'Temporary Admin Package',
    bgColor: '',
    items: [
      {
        title: 'User Management',
        value: '8/24'
      },
      {
        title: 'Accounting Management',
        value: '4/11'
      },
      {
        title: 'Game Management',
        value: '1/15'
      },
      {
        title: 'Tools',
        value: '0/14'
      },
      {
        title: 'Settings',
        value: '1/7'
      },
      {
        title: 'Reports',
        value: '10/20'
      }
    ]
  }
]

function Page() {

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
        <ActionModal
          data={{}}
        />
      </Stack>
    );
  }, []);


  return (
    <Fragment>
      <TitleBar
        title={t("pages.settings.permissions.Permissions")}
        Right={ButtonComps}
      />

      <Grid container spacing={2} direction="row" alignItems="stretch">

        <Grid item xs={12} >
          <Typography variant="h4">{t('pages.settings.permissions.System Pre Defined Packages')}</Typography>
        </Grid>

        {data.filter(item => item.category==='system').map((item, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <Card sx={{ backgroundColor: item.bgColor, color:'white', display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, textAlign:'center', paddingTop:'5px'}}>
                <Typography variant="h5"><strong>{item.packageTitle}</strong></Typography>
                {item.items.map((item, index) => (
                  <Stack direction="row" justifyContent="space-between" key={index} mt={2}>
                    <Box>{item.title}</Box>
                    <Box><strong>{item.value}</strong></Box>
                  </Stack>
                ))}
              </CardContent>
              <CardActions>
                <ActionModal
                  data={item}
                  id={item.id}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}


      </Grid>

      <Grid container mt={6} spacing={2} direction="row" alignItems="stretch">
        <Grid item xs={12} >
          <Typography variant="h4">{t('pages.settings.permissions.Customer Defined Packages')}</Typography>
        </Grid>
        {data.filter(item => item.category==='customer').map((item, index) => (
          <Grid item xs={12} sm={4} lg={3} key={index}>
            <Card sx={{ backgroundColor: item.bgColor, display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
              <CardContent sx={{ flexGrow: 1, textAlign:'center', paddingTop:'5px'}}>
                <Typography variant="h5"><strong>{item.packageTitle}</strong></Typography>
                {item.items.map((item, index) => (
                  <Stack direction="row" justifyContent="space-between" key={index} mt={2}>
                    <Box>{item.title}</Box>
                    <Box><strong>{item.value}</strong></Box>
                  </Stack>
                ))}
              </CardContent>
              <CardActions>
                <ActionModal
                  data={item.id}
                  id={item.id}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Fragment>
  );
}

export default memo(Page);
