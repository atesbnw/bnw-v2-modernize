import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, CardContent, Grid, Paper, Typography } from '@mui/material';
import {
  IconChevronDown, IconChevronUp,
} from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import {
  useGridItemsPerPage,
} from '@/app/(default)/components/merchants/financial-transactions/useGridItemsPerPage';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import {t} from "i18next";

const StatCards = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const itemsPerPage = useGridItemsPerPage();
  // const chunkedData = useMemo(() => chunkArray(data, itemsPerPage), [data, itemsPerPage]);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = useCallback(() => setShowAll(!showAll), [showAll]);

  const visibleData = useMemo(() => {
    return showAll ? data : data?.slice(0, 8);
  }, [data, showAll]);

  useEffect(() => {
    setData([
      { title: t("pages.user-management.user_management_dashboard.balance"), digits: '5.000,00₺ '},
      { title: t("pages.user-management.user_management_dashboard.deposit"), digits: '46.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.withdraw"), digits: '30.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.receivedBonus"), digits: '46.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.canceledBonus"), digits: '6.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.wagered"), digits: '46.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.win"), digits: '20.000,00₺'},
      { title: t("pages.user-management.user_management_dashboard.memberProfitability"), digits: '%42'},
    ]);
  }, []);

  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={3}>
        <TransitionGroup component={null} className="flex-wrap">
          <Grid item container>
            {visibleData.map(({ icon, ...topcard }, i) => (
              <Collapse key={i} in={i < 8 || showAll} timeout={600} className={"w-full sm:w-1/2 md:w-1/4 p-2"}>
                <Box bgcolor={'info.light'} textAlign="center" className={''}>
                  <CardContent className={'flex gap-3 items-center justify-center group'}>
                    {icon && (
                      <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 2,
                        p: 1,
                      }} className={'items-center flex scale-90 group-hover:scale-100 transition-all ease-in-out'}>
                        {icon}
                      </Box>
                    )}
                    <Box className={'flex-1'}>
                      <Typography
                        color={'primary.main'}
                        mt={1}
                        variant="body1"
                        fontWeight={600}
                        className={'select-none'}
                      >
                        {topcard.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        fontWeight={600}
                        className={'select-none'}
                      >
                        {topcard.digits}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Collapse>
            ))}
          </Grid>
        </TransitionGroup>
      </Grid>

      {data.length > 8 && (
        <Grid textAlign="center" mt={2} alignItems="center" justifyContent="center">
          <Button variant="outlined" color="primary" onClick={toggleShowAll} >
            {!showAll ? <IconChevronDown size={18} /> : <IconChevronUp size={18} />}
          </Button>
        </Grid>
      )}

    </Box>
  );
};

export default memo(StatCards);
