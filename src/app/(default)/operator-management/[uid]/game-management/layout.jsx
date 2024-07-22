"use client";
import React, { memo } from 'react';
import HeaderCustom from '@/app/(default)/components/operator-management/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/operator-management/[uid]/game-management/menu';

function layout({ children }) {
  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Operator Management.profile")}`} activeItem={t("menu.Game Management.Casino Management")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
