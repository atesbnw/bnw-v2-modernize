"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/accounting-management/field-stuff`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "pages.accounting-management.confirmed",
      href: `${url}`
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
