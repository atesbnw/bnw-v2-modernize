"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';

function layout({ children }) {
  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Merchants.profile",
      children: [
        {
          id: uniqueId(),
          title: "menu.Home",
          href: `${url}`,
        },
        {
          id: uniqueId(),
          title: "menu.Users.Personal Information",
          href: `${url}/personal-information`,
        },
        {
          id: uniqueId(),
          title: "menu.Users.Account Info",
          href: `${url}/account-info`,
        },
        {
          id: uniqueId(),
          title: "menu.Users.Contact Info",
          href: `${url}/contact-info`,
        },
        {
          id: uniqueId(),
          title: "menu.Users.State and Role",
          href: `${url}/state-and-role`,
        },
      ]
    },
    {
      id: uniqueId(),
      title: "menu.Users.Privacy Info",
      href: `${url}/privacy-info`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Notes",
      href: `${url}/notes`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Messages",
      href: `${url}/messages`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Documents",
      href: `${url}/docs`,
    },
  ];

  return (
    <HeaderCustom menu={menu} title={t("menu.Merchants.profile")}>
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
