"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/game-management/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';
import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';

function layout({ children }) {
  const params = useParams();
  const url = useMemo(() => {
    return `/game-management`;
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
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Category Management",
      href: `${url}/category-management`,
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Admin Address",
      href: `${url}/admin-address`,
    }
  ];

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/merchants`,
      title: "menu.Game Management.title",
    }
  ];

  return (
    <PageContainer title={t("menu.Game Management.title")} description="">
      <HeaderCustom menu={menu} title={`${t("menu.Game Management.title")}`} >
        {children}
      </HeaderCustom>

    </PageContainer>
  );
}

export default memo(layout);
