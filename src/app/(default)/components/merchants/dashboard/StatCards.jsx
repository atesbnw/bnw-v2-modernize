import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, CardContent, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {t} from "i18next";

const StatCards = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const visibleData = useMemo(() => {
    return showAll ? data : data?.slice(0, 8);
  }, [data, showAll]);

  useEffect(() => {
    setData([
      { title: t("pages.merchants.dashboard.Balance/Poker/Okey"), digits: '5.000,00₺/2.000,00₺/5.000,00₺'},
      { title: t("pages.merchants.dashboard.Deposit/Withdraw"), digits: '2.000,00₺/5.000,00₺'},
      { title: t("pages.merchants.dashboard.Played/Win"), digits: ' 5.000,00₺/20.000,00₺'},
      { title: t("pages.merchants.dashboard.Received/CanceledBonus"), digits: '46.000,00₺/6.000,00₺'},
      { title: t("pages.merchants.dashboard.memberProfitability"), digits: '%42'},
    ]);
  }, []);

  return (
    <Box className={"flex items-stretch gap-2"}>
      {visibleData.map(({ icon, ...topcard }, i) => (
        <Box className={"w-full sm:w-1/2 md:w-1/5 px-2 py-6 items-stretch text-center"} bgcolor={'info.light'}>
          <Box className={'flex gap-3 items-center justify-center group'}>
            <Box className={'flex-1'}>
              <Typography
                color={'primary.dark'}
                mb={1}
                variant="subtitle2"
                fontWeight={600}
                className={'select-none'}
              >
                {topcard.title}
              </Typography>
              <Typography
                variant="body2"
                className={'select-none'}
              >
                {topcard.digits}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default memo(StatCards);
