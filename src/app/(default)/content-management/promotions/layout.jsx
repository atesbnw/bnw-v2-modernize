"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/content-management/HeaderCustom';
import { t } from 'i18next';

function layout({ children }) {

  return (
    <HeaderCustom menu={false} title={t("Content Management.title")} activeItem={t("Content Management.Promotions")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
