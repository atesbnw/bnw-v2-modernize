"use client";
import React, { memo, useState, useCallback, useMemo } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Page() {
  const params = useParams();
  const pathname = usePathname();


  return (
    <Box>
      {/*<Typography variant="h6" component="div">{t('menu.Users.Financial Transactions')}</Typography>*/}
      <Typography variant="subtitle1" component="div">{pathname}</Typography>
    </Box>
  );
}

export default memo(Page);
