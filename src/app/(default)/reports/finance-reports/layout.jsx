"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/reports/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/reports/finance-reports/menu';

function layout({ children }) {

  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={t("Reports.Finance Reports")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
