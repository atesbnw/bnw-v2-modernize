import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import {
  IconCircleArrowUp,
  IconCircleArrowDown,
} from '@tabler/icons-react';
import setData from 'lodash/_setData';
import { uniqueId } from 'lodash';

const StatsRow = () => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const iconProps = {
    size: 23,
    stroke: 1,
  };

  useEffect(() => {
    function updateData(){
      setData([
        { title: 'SPOR BAHİSİ', value: '12.903,84 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        { title: 'SPOR KAZANAN', value: '11.792,24 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        { title: 'CASINO BAHİSİ', value: '6.377,57 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        { title: 'CASINO KAZANAN', value: '6.645,43 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        { title: 'RAKE', value: '0,00 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        { title: 'BONUS', value: '45,21 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
        // { title: 'TURNAVA MALİYETİ', value: '0,00 ₺', direction: uniqueId()%2===0 ? 'up' : "down" },
      ]);
    }

    const timer = setInterval(() => {
      updateData();
    }, 1500);

    return () => {
      timer && clearInterval(timer);
    }
  }, []);

  return (
    <Box sx={{
      p: 2,
      m: 2
    }}>
      <Grid container spacing={1}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Box className={"flex items-center gap-1 py-4 px-2"} sx={{
              backgroundColor: theme.palette.primary.light,
            }}>
              <Box className={'flex flex-col items-center flex-1'}>
                <Typography variant="body2" color={"primary.main"}>{item.title}</Typography>
                <Typography variant="h6">{item.value}</Typography>
              </Box>
              <Box className={'flex items-center'}>
                {item?.direction === 'up' ? (
                  <IconCircleArrowUp {...iconProps} color="green" />
                ) : (
                  <IconCircleArrowDown {...iconProps} color="red" />
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(StatsRow);
