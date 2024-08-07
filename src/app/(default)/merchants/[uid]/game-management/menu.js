"use client";
import { useMemo } from 'react';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';

export const useMenu = () => {

  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/game-management`;
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
    }
  ];

  return{
    menu,
    url
  }
}
