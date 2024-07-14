"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/settings/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/settings/(commission-percents)/menu';

function layout({ children }) {

  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={t("Settings.title")} activeItem={t("Settings.Commission Percents")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
