import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, CardContent, Grid, Paper, Typography } from '@mui/material';
import {
  IconCash,
  IconPercentage, IconExchange,
} from '@tabler/icons-react';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel'
import {
  chunkArray,
  useGridItemsPerPage,
} from '@/app/(default)/components/users/financial-transactions/useGridItemsPerPage';

const StatCards = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const itemsPerPage = useGridItemsPerPage();
  const chunkedData = useMemo(() => chunkArray(data, itemsPerPage), [data, itemsPerPage]);


  useEffect(() => {
    setData([
      { title: 'Bakiye', digits: '5.000,00₺ '},
      { title: 'Poker', digits: '2.000,00₺'},
      { title: 'Okey', digits: ' 5.000,00₺ '},
      { title: 'Yatırım', digits: '46.000,00₺'},
      { title: 'Çekim', digits: '30.000,00₺'},
      { title: 'Alınan Bonus', digits: '46.000,00₺'},
      { title: 'İptal Bonus', digits: '6.000,00₺'},
      { title: 'Oynanan', digits: '46.000,00₺'},
      { title: 'Kazanç', digits: '20.000,00₺'},
      { title: 'Üye Karlılık', digits: '%42'},
    ]);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pb: 3}}>
      {/*<Grid container spacing={3} mt={1}>*/}
      <Carousel navButtonsAlwaysInvisible={true} animation={"slide"} className={"group"} indicatorContainerProps={{
        className: "group-hover:opacity-50 opacity-0 transition-opacity ease-in-out",
      }}>
        {chunkedData.map((chunk, chunkIndex) => (
          <Grid container spacing={3} mt={1} key={chunkIndex}>
            {chunk.map(({ icon, ...topcard }, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
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
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
      {/*</Grid>*/}
    </Box>
  );
};

export default memo(StatCards);
