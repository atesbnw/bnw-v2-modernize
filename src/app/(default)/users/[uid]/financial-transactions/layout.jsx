"use client";
import React, { memo, useMemo } from 'react';
import HeaderCustom from '@/app/(default)/components/users/HeaderCustom';
import { t } from 'i18next';
import {useMenu} from "@/app/(default)/users/[uid]/financial-transactions/menu";

function layout({ children }) {
  const {menu} = useMenu();

  return (
    <HeaderCustom menu={menu} title={`${t("Users.bc.User Details")}`} activeItem={t("menu.Users.Financial Transactions")} >
      {children}
    </HeaderCustom>
  );
}

export default memo(layout);
