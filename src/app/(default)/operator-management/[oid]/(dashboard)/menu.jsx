"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/operator-management/${params?.oid}`;
  }, [params?.oid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Operator Management.profile",
      children: [
        {
          id: uniqueId(),
          title: "menu.Operator Management.profile",
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
          href: `${url}/status-and-role`,
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
      title: "menu.Users.Documents",
      href: `${url}/docs`,
    },
  ];

  return {
    menu,
    url
  }
}
