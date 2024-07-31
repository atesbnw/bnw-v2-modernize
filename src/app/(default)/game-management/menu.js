"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/game-management`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Game Management.Casino Management",
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Live Casino Management",
      href: `${url}/live-casino-management`,
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Virtual Game Management",
      href: `${url}/virtual-game-management`,
    },
    // {
    //   id: uniqueId(),
    //   title: "menu.Game Management.Sportsbook Management",
    //   href: `${url}/sportsbook-management`,
    // },
    {
      id: uniqueId(),
      title: "menu.Game Management.Category Management",
      href: `${url}/category-management`,
    },
    {
      id: uniqueId(),
      title: "menu.Game Management.Admin Address",
      href: `${url}/admin-address`,
    }
  ];

  return {
    menu,
    url
  }
}
