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
      <TitleBar
        title={t('menu.Reports.Login Reports')}
      />
    </Box>
  );
}

export default memo(Page);
