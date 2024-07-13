"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/users/${params?.uid}/reports`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Reports.Casino Reports",
      href: `${url}/casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Live Casino Reports",
      href: `${url}/live-casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Virtual Game Reports",
      href: `${url}/virtual-game-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Bet Reports",
      href: `${url}/bet-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Bonus Reports",
      href: `${url}/bonus-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Finance Reports",
      href: `${url}/finance-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.User Stats",
      href: `${url}/user-stats`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Login Reports",
      href: `${url}/login-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Reports.Transaction Logs",
      href: `${url}/transaction-logs`,
    }
  ];

  return {
    menu,
    url
  }
}
