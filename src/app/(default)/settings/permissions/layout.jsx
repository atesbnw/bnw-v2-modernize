"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/settings/HeaderCustom';
import { t } from 'i18next';

function layout({ children }) {

  return (
    <HeaderCustom menu={false} title={t("Settings.Permissions")} activeItem={t("Settings.Permissions")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
