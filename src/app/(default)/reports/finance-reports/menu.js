"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports/finance-reports`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Finance Reports",
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Bonus Reports",
      href: `${url}/bonus-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Manuel Transaction Reports",
      href: `${url}/manuel-transaction-reports`,
    }
  ];

  return {
    menu,
    url
  }
}
