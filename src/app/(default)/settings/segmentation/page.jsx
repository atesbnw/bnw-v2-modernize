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
  Stack
} from "@mui/material";

const data = [
  {
    id:1,
    category:'system',
    title: 'New Member',
    bgColor: 'info.dark',
    items: [
      {
        title: 'Casino Upper Limit',
        value: '1.000 TL'
      },
      {
        title: 'Bet Upper Limit',
        value: '1.000 TL'
      },
      {
        title: 'Deposit Upper Limit',
        value: '1.000 TL'
      },
      {
        title: 'Withdraw Upper Limit',
        value: '1.000 TL'
      },
      {
        title: 'Segment',
        value: 'New Users'
      }
    ]
  },
  {
    id:2,
    category:'system',
    title: 'Current Member',
    bgColor: 'info.dark',
    items: [
      {
        title: 'Casino Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Bet Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Deposit Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Withdraw Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Segment',
        value: 'Current Users'
      }
    ]
  },
  {
    id:3,
    category:'system',
    title: 'Loyal Member',
    bgColor: 'info.dark',
    items: [
      {
        title: 'Casino Upper Limit',
        value: '5.000 TL'
      },
      {
        title: 'Bet Upper Limit',
        value: '5.000 TL'
      },
      {
        title: 'Deposit Upper Limit',
        value: '5.000 TL'
      },
      {
        title: 'Withdraw Upper Limit',
        value: '5.000 TL'
      },
      {
        title: 'Segment',
        value: 'Loyal Users'
      }
    ]
  },
  {
    id:4,
    category:'system',
    title: 'VIP Member',
    bgColor: 'warning.dark',
    items: [
      {
        title: 'Casino Upper Limit',
        value: '100.000 TL'
      },
      {
        title: 'Bet Upper Limit',
        value: '100.000 TL'
      },
      {
        title: 'Deposit Upper Limit',
        value: '100.000 TL'
      },
      {
        title: 'Withdraw Upper Limit',
        value: '100.000 TL'
      },
      {
        title: 'Segment',
        value: 'Private Users'
      }
    ]
  },
  {
    id:5,
    category:'customer',
    title: 'Hotel Customer Package',
    bgColor: '',
    items: [
      {
        title: 'Casino Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Bet Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Deposit Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Withdraw Upper Limit',
        value: '3.000 TL'
      },
      {
        title: 'Segment',
        value: 'New Users'
      }
    ]
  }
]

function Page() {

  const ButtonComps = useCallback(() => {
    return (
      <Stack direction={"row"} className={"gap-2 items-center"}>
      </Stack>
    );
  }, []);


  return (
  <Fragment>
    <TitleBar
      title={t("pages.settings.segmentation.Segmentation")}
      Right={ButtonComps}
    />

    <Grid container spacing={2} direction="row" alignItems="stretch">

      <Grid item xs={12} >
        <Typography variant="h4">{t('pages.settings.segmentation.System Pre Defined Packages')}</Typography>
      </Grid>

      {data.filter(item => item.category==='system').map((item, index) => (
        <Grid item xs={12} sm={4} lg={3} key={index}>
          <Card sx={{ backgroundColor: item.bgColor, color:'white', display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
            <CardContent sx={{ flexGrow: 1, textAlign:'center', paddingTop:'5px'}}>
              <Typography variant="h5"><strong>{item.title}</strong></Typography>
              {item.items.map((item, index) => (
                <Box key={index} mt={2}>
                  <Typography>{item.title}</Typography>
                  <Typography><strong>{item.value}</strong></Typography>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button variant="contained"  fullWidth sx={{
                backgroundColor: '#ffffff',
                color: '#000000',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}>
                {t('i.See Details')}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}


    </Grid>

    <Grid container mt={6} spacing={2} direction="row" alignItems="stretch">
      <Grid item xs={12} >
        <Typography variant="h4">{t('pages.settings.segmentation.Customer Defined Packages')}</Typography>
      </Grid>
      {data.filter(item => item.category==='customer').map((item, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Card sx={{ backgroundColor: item.bgColor, display: 'flex', flexDirection: 'column', height: '100%' }} variant="outlined">
            <CardContent sx={{ flexGrow: 1, textAlign:'center', paddingTop:'5px'}}>
              <Typography variant="h5"><strong>{item.title}</strong></Typography>
              {item.items.map((item, index) => (
                <Box key={index} mt={2}>
                  <Typography>{item.title}</Typography>
                  <Typography><strong>{item.value}</strong></Typography>
                </Box>
              ))}
            </CardContent>
            <CardActions>
              <Button variant="contained"  fullWidth>
                {t('i.See Details')}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>

  </Fragment>
  );
}

export default memo(Page);
