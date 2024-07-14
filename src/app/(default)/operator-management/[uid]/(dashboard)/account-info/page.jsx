"use client";
import React, { memo, useState, useCallback, useMemo } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TitleBar from '@/app/components/TitleBar';

function Page() {
  const params = useParams();
  const pathname = usePathname();


  return (
    <Box>
      {/*<Typography variant="h6" component="div">{t('menu.Users.Financial Transactions')}</Typography>*/}
      <TitleBar
        title={params?.uid}
      />
    </Box>
  );
}

export default memo(Page);
