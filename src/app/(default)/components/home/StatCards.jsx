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
  IconPercentage, IconExchange, IconMoodDollar, IconDiscountOff, IconDiscountCheck, IconChevronDown, IconChevronUp,
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
      { title: "Toplam Bakiye", digits: "46.000,00₺", icon: <IconCash {...iconProps} /> },
      { title: "Yatırım", digits: "46.000,00₺", icon: <IconExchange {...iconProps} /> },
      { title: "Çekim", digits: "46.000,00₺", icon: <IconExchange {...iconProps} /> },
      { title: "Alınan Bonus", digits: "46.000,00₺", icon: <IconDiscountCheck {...iconProps} /> },
      { title: "İptal Bonus", digits: "30.000,00₺", icon: <IconDiscountOff {...iconProps} /> },
      { title: "Oynanan", digits: "46.000,00₺", icon: <IconChartLine {...iconProps} /> },
      { title: "Kazanç", digits: "30.000,00₺", icon: <IconMoodDollar {...iconProps} /> },
      { title: "Toplam Üye Sayısı", digits: "150", icon: <IconUsers {...iconProps} /> },
      { title: "Aktif Üye Sayısı", digits: "130", icon: <IconUserCheck {...iconProps} /> },
      { title: "Bayi Hakediş", digits: "120,00₺", icon: <IconCoins {...iconProps} /> },
      { title: "Bayi Komisyon Oranı", digits: "%15", icon: <IconPercentage {...iconProps} /> }
    ])
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3} mt={1}>
        <TransitionGroup component={null} className="flex-wrap">
          {visibleData.map(({ icon, ...topcard }, i) => (
            <Collapse key={i} in={i < 8 || showAll} timeout={600} className={"w-full sm:w-1/2 md:w-1/4 p-3"}>
              {/*<Grid item xs={12} sm={6} md={3}>*/}
                  <Box bgcolor={"info.light"} textAlign="center">
                    <CardContent className={"flex gap-3 items-center justify-center"}>
                      <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 2,
                        p:1
                      }} className={"items-center flex"}>
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
        <Box textAlign="center" mt={2}>
          <Button variant="text" color="primary" onClick={toggleShowAll} fullWidth>
            {!showAll ? <IconChevronDown size={18} /> : <IconChevronUp size={18} />}
          </Button>
        </Box>
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
