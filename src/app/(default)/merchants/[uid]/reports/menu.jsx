"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/reports`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Casino Reports",
      href: `${url}/casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Live Casino Reports",
      href: `${url}/live-casino-reports`
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Virtual Game Reports",
      href: `${url}/virtual-game-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Bet Reports",
      href: `${url}/bet-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Bonus Reports",
      href: `${url}/bonus-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Finance Reports",
      href: `${url}/finance-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.User Stats",
      href: `${url}/user-stats`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Login Reports",
      href: `${url}/login-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Merchants.Reports Menu.Transaction Logs",
      href: `${url}/transaction-logs`,
    }
  ];

  return {
    menu,
    url
  }
}
