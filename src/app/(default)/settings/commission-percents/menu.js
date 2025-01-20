"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/settings/commission-percents`;
  }, []);
  const menu = [
    {
      id: uniqueId(),
      title: "Settings.Providers",
      href: `${url}/providers`
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
