"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/operator-management/${params?.oid}/reports`;
  }, [params?.oid]);
  const menu = [
    {
      id: uniqueId(),
      title: "Reports.Casino Reports",
      href: `${url}/casino-reports`
    },
    {
      id: uniqueId(),
      title: "Reports.Live Casino Reports",
      href: `${url}/live-casino-reports`
    },
    {
      id: uniqueId(),
      title: "Reports.Virtual Game Reports",
      href: `${url}/virtual-game-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Bet Reports",
      href: `${url}/bet-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Bonus Reports",
      href: `${url}/bonus-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Finance Reports",
      href: `${url}/finance-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.User Stats",
      href: `${url}/user-stats`,
    },
    {
      id: uniqueId(),
      title: "Reports.Login Reports",
      href: `${url}/login-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Transaction Logs",
      href: `${url}/transaction-logs`,
    }
  ];

  return {
    menu,
    url
  }
}
