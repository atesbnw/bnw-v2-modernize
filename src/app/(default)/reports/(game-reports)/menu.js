"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "Reports.Casino Reports",
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "Reports.Live Casino Reports",
      href: `${url}/live-casino-reports`,
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
    }
  ];

  return {
    menu,
    url
  }
}
