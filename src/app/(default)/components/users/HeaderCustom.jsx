"use client";
import React, { memo, useMemo, Fragment} from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import { t } from 'i18next';
import TopMenu from '@/app/(default)/components/users/TopMenu';
import Box from '@mui/material/Box';
import InnerMenu from '@/app/components/InnerMenu';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';

function HeaderCustom({children}) {

  const params = useParams();
  const url = useMemo(() => {
    return `/users/${params?.uid}`;
  }, [params?.uid]);

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: '/users',
      title: "Users.bc.User Management",
    },
    {
      title: params?.uid,
    },
  ];

  return (
    <Fragment>
      <Breadcrumb title={t("Users.bc.User Details")} items={BCrumb} />


      <TopMenu />
      <Box sx={{
        padding: "14px",
        gap:3,
        display:"flex",
        justifyContent: "stretch"
      }}>
        <InnerMenu
          items={[
            {
              id: uniqueId(),
              title: "menu.Users.Player Info",
              children: [
                {
                  id: uniqueId(),
                  title: "menu.Users.Player Info",
                  href: `${url}`,
                },
                {
                  id: uniqueId(),
                  title: "menu.Users.Personal Information",
                  href: `${url}/i/personal-information`,
                },
                {
                  id: uniqueId(),
                  title: "menu.Users.Account Info",
                  href: `${url}/i/account-info`,
                },
                {
                  id: uniqueId(),
                  title: "menu.Users.Contact Info",
                  href: `${url}}/i/contact-info`,
                },
                {
                  id: uniqueId(),
                  title: "menu.Users.State and Role",
                  href: `${url}/i/state-and-role`,
                },
              ]
            },
            {
              id: uniqueId(),
              title: "menu.Users.Privacy Info",
              href: `${url}/privacy-info`,
            },
            {
              id: uniqueId(),
              title: "menu.Users.Notes",
              href: `${url}/notes`,
            },
            {
              id: uniqueId(),
              title: "menu.Users.Messages",
              href: `${url}/messages`,
            },
            {
              id: uniqueId(),
              title: "menu.Users.Documents",
              href: `${url}/docs`,
            },
          ]}
        />

        {children}
      </Box>

    </Fragment>
  );
}

export default memo(HeaderCustom);
