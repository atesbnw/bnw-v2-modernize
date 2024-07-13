"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';

function layout({ children }) {
  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/game-management`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Game Management.Casino Management",
      href: `${url}/casino-management`
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Live Casino Management",
      href: `${url}/live-casino-management`,
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Virtual Game Management",
      href: `${url}/virtual-game-management`,
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Sportsbook Management",
      href: `${url}/sportsbook-management`,
    }
  ];

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Merchants.profile")}`} activeItem={t("menu.Users.Game Management")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
