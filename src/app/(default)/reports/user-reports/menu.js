"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports/user-reports`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "Reports.User Balance Reports",
      href: `${url}/user-balance-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.User Game Reports",
      href: `${url}/user-game-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.User Finance Reports",
      href: `${url}/user-finance-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Operator Reports",
      href: `${url}/operator-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.User Stats",
      href: `${url}/user-stats`,
    },
    {
      id: uniqueId(),
      title: "Reports.Login Logs",
      href: `${url}/login-logs`,
    },
    {
      id: uniqueId(),
      title: "Reports.Negative Reports",
      href: `${url}/negative-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Custom User Reports",
      href: `${url}/custom-user-reports`,
    },
    {
      id: uniqueId(),
      title: "Reports.Merchant Reports",
      href: `${url}/merchant-reports`,
    }
    // ,
    // {
    //   id: uniqueId(),
    //   title: "Reports.User Bet Reports",
    //   href: `${url}/user-bet-reports`,
    // }
  ];

  return {
    menu,
    url
  }
}
