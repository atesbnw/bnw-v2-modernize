"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/tools`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "pages.tools.bonus.Bonuses",
      href: `${url}/bonuses`
    },
    {
      id: uniqueId(),
      title: "pages.tools.bonus.FreeSpins",
      href: `${url}/free-spins`,
    },
  ];

  return {
    menu,
    url
  }
}
