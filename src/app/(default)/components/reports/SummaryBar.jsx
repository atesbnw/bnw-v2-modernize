"use client";
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import ParentCard from '@/app/components/shared/ParentCard';

const SummaryBar = ({ data, title }) => {
  return (
    <Card title={""}
      variant={"outlined"}
      className={"flex flex-col md:flex-row md:items-center"}
    >

      <Grid container spacing={2}>
        {data && data?.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} lg={2} key={index}>
            <Box textAlign="center">
              <Typography variant="h6">{item?.title}</Typography>
              <Typography variant="subtitle1">{item?.value}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SummaryBar;
