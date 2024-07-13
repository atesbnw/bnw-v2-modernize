"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { t } from 'i18next';

function layout({ children }) {

  return (
    <HeaderCustom menu={false} title={`${t("menu.Users.Settings")}`} activeItem={t("menu.Users.Settings")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
