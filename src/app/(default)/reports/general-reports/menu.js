"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports/general-reports`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "Reports.Commission Reports",
      href: `${url}`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Bet Reports",
      href: `${url}/bet-reports`,
    }
  ];

  return {
    menu,
    url
  }
}
