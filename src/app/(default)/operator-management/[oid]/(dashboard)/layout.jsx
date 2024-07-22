"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/operator-management/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/operator-management/[oid]/(dashboard)/menu';

function layout({ children }) {
  const {menu} = useMenu();


  return (
    <HeaderCustom menu={menu} title={t("menu.Operator Management.profile")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
