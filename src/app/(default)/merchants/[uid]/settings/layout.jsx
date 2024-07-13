"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';

function layout({ children }) {
  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/settings`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Users.Settings",
      href: `${url}`
    }
  ];

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Users.Settings")}`} activeItem={t("menu.Users.Settings")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
