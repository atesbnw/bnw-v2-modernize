"use client";
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { uniqueId } from 'lodash';

export function useMenu() {

  const params = useParams();
  const url = useMemo(() => {
    return `/operator-management/${params?.uid}/financial-transactions`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Financial Transactions.Transaction History",
      href: `${url}/transaction-history`
    },
    {
      id: uniqueId(),
      title: "menu.Financial Transactions.Balance History",
      href: `${url}/balance-history`,
    },
    {
      id: uniqueId(),
      title: "menu.Financial Transactions.Bet History",
      href: `${url}/bet-history`,
    }
  ];

  return {
    menu,
    url
  }
}
