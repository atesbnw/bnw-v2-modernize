"use client";
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';

const SummaryBar = ({ data, title }) => {
  return (
    <Card
      variant={"outlined"}
      className={"flex flex-col md:flex-row md:items-center"}
    >
      {title && (
        <Typography variant={"h5"} className={"whitespace-nowrap"}>{title}</Typography>
      )}

      <Grid container spacing={2}>
        {data && data?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
