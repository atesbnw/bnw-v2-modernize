"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/accounting-management`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "pages.accounting-management.newRequests",
      chip: 12,
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "pages.accounting-management.waiting",
      chip: 8,
      href: `${url}/waiting`,
    },
    {
      id: uniqueId(),
      title: "pages.accounting-management.confirmed",
      href: `${url}/confirmed`,
    },
    {
      id: uniqueId(),
      title: "pages.accounting-management.canceled",
      href: `${url}/canceled`,
    }
    // ,
    // {
    //   id: uniqueId(),
    //   title: "menu.Users.Reports Menu.Bet Reports",
    //   href: `${url}/bet-reports`,
    // }
  ];

  return {
    menu,
    url
  }
}
