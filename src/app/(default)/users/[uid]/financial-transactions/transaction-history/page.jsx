"use client";
import React, { memo, useState, useCallback, useMemo } from 'react';
import { t } from 'i18next';
import { useParams, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TitleBar from '@/app/components/TitleBar';
import Button from '@mui/material/Button';

function Page() {
  const params = useParams();
  const pathname = usePathname();


  const ButtonComps = useCallback(() => {
    return (
      <div style={{
        display: "flex",
        gap: 4,
        alignItems: "center"
      }}>
        <div>
          <Button variant={"contained"} onClick={() => {}}>{t('menu.Financial Transactions.Add Bonus')}</Button>
        </div>
        <div>
          <Button variant={"contained"} onClick={() => {}}>
            {t('menu.Financial Transactions.Add Manuel Transaction')}
          </Button>
        </div>
      </div>
    )
  }, []);

  return (
    <Box sx={{
      flex: 1
    }}>
      {/*<Typography variant="h6" component="div">{}</Typography>*/}
      <TitleBar
        title={t('menu.Financial Transactions.Transaction History')}
        Right={ButtonComps}
      />


    </Box>
  );
}

export default memo(Page);
