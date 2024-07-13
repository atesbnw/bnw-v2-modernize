"use client";
import React, { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import ProductTableList from '@/app/components/apps/ecommerce/ProductTableList/ProductTableList';
import TitleBar from '@/app/components/TitleBar';
import Button from '@mui/material/Button';
import { t } from 'i18next';

function Page() {

  const ButtonComps = useCallback(() => {
    return (
      <div style={{
        display: "flex",
        gap: 4,
        alignItems: "center"
      }}>
        <div>
          <Button variant={"contained"} onClick={() => {}}>{t('Domain Management.Add Domain')}</Button>
        </div>
        <div>
          <Button variant={"contained"} onClick={() => {}}>
            {t('Domain Management.Change Domain')}
          </Button>
        </div>
      </div>
    )
  }, []);
  return (
    <Box>
      <TitleBar
        title={t("Domain Management.title")}
        Right={ButtonComps}
      />
      <ProductTableList />
    </Box>
  );
}

export default memo(Page);
