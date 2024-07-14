"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/settings`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "Settings.Providers",
      href: `${url}`
    },
    {
      id: uniqueId(),
      title: "Settings.Payment Methods",
      href: `${url}/payment-methods`,
    },
  ];

  return {
    menu,
    url
  }
}
