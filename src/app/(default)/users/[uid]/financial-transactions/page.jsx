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
          <Button onClick={() => {}}>Yatır</Button>
        </div>
        <div>
          <Button onClick={() => {}}>Çek</Button>
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
        Left={() => <img src={"https://placehold.co/600x400/EEE/31343C"} width={50} height={50} />}
        title={t('menu.Users.Financial Transactions')}
        Right={ButtonComps}
      />


    </Box>
  );
}

export default memo(Page);
