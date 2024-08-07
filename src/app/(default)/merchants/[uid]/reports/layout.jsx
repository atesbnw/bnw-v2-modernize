"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/merchants/[uid]/reports/menu';

function layout({ children }) {
  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Merchants.profile")}`} activeItem={"menu.Users.Reports"} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
