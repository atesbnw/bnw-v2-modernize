"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/reports/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/reports/game-reports/menu';

function layout({ children }) {

  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={t("Reports.title")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
