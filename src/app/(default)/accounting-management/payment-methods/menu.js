"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/accounting-management/payment-methods`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "pages.accounting-management.deposit",
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "pages.accounting-management.withdraw",
      href: `${url}/withdraw`,
    },
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
