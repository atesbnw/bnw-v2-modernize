'use client';
import React, { Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Divider, Box } from '@mui/material';
import { useSelector } from 'react-redux';

const ParentCard = ({ children }) => {
  const customizer = useSelector((state) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{ padding: 0, border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none' }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >

      {children}
    </Card>
  );
};

const Action = ({ title, children }) => {
  return (
    <Fragment>
      <CardHeader title={title} action={children} />
      <Divider />
    </Fragment>
  );
};

const Footer = ({ children }) => {
  return (
    <Fragment>
      <Divider />
      <Box p={3}>
        {children}
      </Box>
    </Fragment>
  );
};

const Content = ({ children }) => {
  return (
    <CardContent>
      {children}
    </CardContent>
  );
};

ParentCard.Action = Action;
ParentCard.Content = Content;
ParentCard.Footer = Footer;

export default ParentCard;
