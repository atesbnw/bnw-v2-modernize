"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/game-management/HeaderCustom';
import { t } from 'i18next';
import PageContainer from '@/app/components/container/PageContainer';
import { useMenu } from './menu';

function layout({ children }) {
  const {menu} = useMenu();

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
      <HeaderCustom menu={menu} title={`${t("menu.Game Management.title")}`}>
        {children}
      </HeaderCustom>

    </PageContainer>
  );
}

export default memo(layout);
