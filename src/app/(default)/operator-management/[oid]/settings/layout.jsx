"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/operator-management/HeaderCustom';
import { t } from 'i18next';

function layout({ children }) {

  return (
    <HeaderCustom menu={false} title={`${t("menu.Users.Settings")}`} activeItem={"menu.Users.Settings"} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
