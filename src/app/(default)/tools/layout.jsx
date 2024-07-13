"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/tools/HeaderCustom';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/merchants/[uid]/(dashboard)/menu';

function layout({ children }) {

  return (
    <HeaderCustom menu={false} title={t("Tools.title")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
