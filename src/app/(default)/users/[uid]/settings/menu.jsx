"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/users/${params?.uid}/settings`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Users.Settings Menu.Casino Limitations",
      href: `${url}/casino-limitations`
    },
    {
      id: uniqueId(),
      title: "menu.Users.Settings Menu.Sportsbook Limitations",
      href: `${url}/sportsbook-limitations`
    },
    {
      id: uniqueId(),
      title: "menu.Users.Settings Menu.Finance Limitations",
      href: `${url}/finance-limitations`,
    }
  ];

  return {
    menu,
    url
  }
}
