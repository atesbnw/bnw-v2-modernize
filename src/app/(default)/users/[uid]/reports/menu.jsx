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
      title: "menu.Users.Reports Menu.Casino Reports",
      href: `${url}/casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Live Casino Reports",
      href: `${url}/live-casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Virtual Game Reports",
      href: `${url}/virtual-game-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Bet Reports",
      href: `${url}/bet-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Bonus Reports",
      href: `${url}/bonus-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Finance Reports",
      href: `${url}/finance-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.User Stats",
      href: `${url}/user-stats`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Login Reports",
      href: `${url}/login-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Transaction Logs",
      href: `${url}/transaction-logs`,
    }
  ];

  return {
    menu,
    url
  }
}
