import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, CardContent, Grid, Paper, Typography } from '@mui/material';
import {
  IconCash,
  IconTrendingUp,
  IconCreditCard,
  IconChartLine,
  IconUsers,
  IconUserCheck,
  IconCoins,
  IconPercentage,
  IconExchange,
  IconMoodDollar,
  IconDiscountOff,
  IconDiscountCheck,
  IconChevronDown,
  IconChevronUp,
  IconUser,
} from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import Button from '@mui/material/Button';

const StatCards = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);
  const theme = useTheme();
  const [data, setData] = useState([]);
  const visibleData = useMemo(() => {
    return showAll ? data : data?.slice(0, 8);
  }, [data, showAll]);

  const iconProps = {
    size: 38,
    color: "white",
    stroke: 1
  };

  useEffect(() => {
    setData([
        { title: "DEPOSIT MONEY", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "WITHDRAW MONEY", digits: "4,100.18₺", icon: <IconExchange {...iconProps} /> },
        { title: "PLAYER BALANCE", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "PROFIT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TURNOVER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "NUMBER OF DEPOSITS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "NUMBER OF WITHDRAWALS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "BONUS BALANCE", digits: "4,100.18₺", icon: <IconDiscountCheck {...iconProps} /> },
        { title: "UNIQUE DEPOSITING MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "UNIQUE WITHDRAWING MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "TOTAL BONUS MEMBERS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "UNIQUE MESSAGE MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "UNIQUE REGISTRATION MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "UNIQUE LOGIN MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "SUCCESSFUL LOGIN COUNT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "DAILY LOGIN USER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "VIP MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "LOYAL MEMBER COUNT", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "APPROVED USERS COUNT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "RECEIVED BONUS COUNT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "CANCELED BONUS COUNT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL BONUS MEMBERS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "FIRST DEPOSIT MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "FIRST WITHDRAWAL MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "FIRST BONUS MEMBER", digits: "4,100.18₺", icon: <IconUser {...iconProps} /> },
        { title: "HIGHEST EARNING MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "HIGHEST LOSS MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "MOST EARNING DEALER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "MOST LOSING DEALER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "TOTAL DEALER COUNT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL CASINO PROFIT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL LIVE CASINO PROFIT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL VIRTUAL GAMES PROFIT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "TOTAL SPORTS PROFIT", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "MOST EARNING CASINO MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "MOST EARNING LIVE CASINO MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "MOST EARNING VIRTUAL GAMES MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        // { title: "MOST EARNING SPORTS MEMBER", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL CASINO PROVIDERS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL LIVE CASINO PROVIDERS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> },
        { title: "TOTAL VIRTUAL GAMES PROVIDERS", digits: "4,100.18₺", icon: <IconCash {...iconProps} /> }
      ]
    )
  }, []);

  return (
    <Box>
      <Grid container spacing={2} mt={1}>
        <TransitionGroup component={null} className="flex-wrap">
          {visibleData.map(({ icon, ...topcard }, i) => (
            <Collapse key={i} in={i < 8 || showAll} timeout={600} className={"w-full sm:w-1/2 md:w-1/4 p-3"}>
              {/*<Grid item xs={12} sm={6} md={3}>*/}
                  <Box bgcolor={"info.light"} textAlign="center" className={""}>
                    <CardContent className={"flex gap-3 items-center justify-center group"}>
                      <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 2,
                        p:1
                      }} className={"items-center flex scale-90 group-hover:scale-100 transition-all ease-in-out"}>
                        {icon && icon}
                      </Box>
                      <Box className={"flex-1"}>
                        <Typography
                          color={"primary.main"}
                          mt={1}
                          variant="body1"
                          fontWeight={600}
                          className={"select-none"}
                        >
                          {topcard.title}
                        </Typography>
                        <Typography
                          // color={"text.secondary"}
                          variant="h4"
                          fontWeight={600}
                          className={"select-none"}
                        >
                          {topcard.digits}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
              {/*</Grid>*/}
            </Collapse>
          ))}
        </TransitionGroup>
      </Grid>
      {data.length > 8 && (
        <Grid textAlign="center" mt={2} alignItems="center" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={toggleShowAll} >
            {!showAll ? <IconChevronDown size={18} /> : <IconChevronUp size={18} />}
          </Button>
        </Grid>
      )}


      {/*<Grid container spacing={3} mt={1}>*/}
      {/*  {data.map(({ icon, ...topcard }, i) => (*/}
      {/*    <Grid item xs={12} sm={6} md={3} key={i}>*/}
      {/*      <Box bgcolor={"info.light"} textAlign="center">*/}
      {/*        <CardContent className={"flex gap-3 items-center"}>*/}
      {/*          {icon && icon}*/}
      {/*          /!*<Image src={topcard.icon} alt={"topcard.icon"} width="50" height="50" />*!/*/}
      {/*          <Box className={"flex-1"}>*/}
      {/*            <Typography*/}
      {/*              color={"primary.main"}*/}
      {/*              mt={1}*/}
      {/*              variant="body1"*/}
      {/*              fontWeight={600}*/}
      {/*            >*/}
      {/*              {topcard.title}*/}
      {/*            </Typography>*/}
      {/*            <Typography*/}
      {/*              color={"text.secondary"}*/}
      {/*              variant="h4"*/}
      {/*              fontWeight={600}*/}
      {/*            >*/}
      {/*              {topcard.digits}*/}
      {/*            </Typography>*/}
      {/*          </Box>*/}
      {/*        </CardContent>*/}
      {/*      </Box>*/}
      {/*    </Grid>*/}
      {/*  ))}*/}
      {/*</Grid>*/}


      {/*<Grid container spacing={2}>*/}
      {/*  {data && data?.map(({ icon, ...item }, index) => (*/}
      {/*    <Grid item xs={12} sm={6} md={3} key={index}>*/}
      {/*      <Paper sx={{ p: 2, textAlign: 'center', display: "flex", alignItems: "center", gap: 4 }}>*/}
      {/*        <Box>*/}
      {/*          {icon && icon}*/}
      {/*        </Box>*/}
      {/*        <Box>*/}
      {/*          <Typography variant="h6">{item.title}</Typography>*/}
      {/*          <Typography variant="body1">{item.value}</Typography>*/}
      {/*        </Box>*/}
      {/*      </Paper>*/}
      {/*    </Grid>*/}
      {/*  ))}*/}
      {/*</Grid>*/}
    </Box>
  );
}

export default memo(StatCards);
