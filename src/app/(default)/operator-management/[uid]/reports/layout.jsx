"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/operator-management/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';
import { useMenu } from '@/app/(default)/operator-management/[uid]/reports/menu';

function layout({ children }) {
  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Operator Management.profile")}`} activeItem={t("menu.Users.Reports")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
