"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/tools/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/tools/bonuses/menu';

function layout({ children }) {

  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={t("Tools.title")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
