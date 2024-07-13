"use client";
import { useMemo } from 'react';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';

export const useMenu = () => {

  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/financial-transactions`;
  }, [params?.uid]);
  const menu = [
    {
      id: uniqueId(),
      title: "menu.Financial Transactions.Transaction History",
      href: `${url}`
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

  return{
    menu,
    url
  }
}
