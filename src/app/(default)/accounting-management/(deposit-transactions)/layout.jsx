"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/finance-management/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from './menu';

function layout({ children }) {

  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={t("pages.accounting-management.depositTransactions")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
