"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports/game-reports`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Casino Reports",
      href: `${url}/casino-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Live Casino Reports",
      href: `${url}/live-casino-reports`,
    },
    {
      id: uniqueId(),
      title: "menu.Users.Reports Menu.Virtual Game Reports",
      href: `${url}/virtual-game-reports`,
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
