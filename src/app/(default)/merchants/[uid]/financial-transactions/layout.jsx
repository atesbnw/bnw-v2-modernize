"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/merchants/HeaderCustom';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import { t } from 'i18next';

function layout({ children }) {
  const params = useParams();
  const url = useMemo(() => {
    return `/merchants/${params?.uid}/financial-transactions`;
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

  return (
    <HeaderCustom menu={menu} title={`${t("menu.Merchants.profile")}`} activeItem={t("menu.Users.Financial Transactions")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
