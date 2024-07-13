"use client";
import React, { memo, useMemo} from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import { t } from 'i18next';
import TopMenu from '@/app/(default)/components/reports/TopMenu';
import Box from '@mui/material/Box';
import InnerMenu from '@/app/components/InnerMenu';
import { useParams } from 'next/navigation';
import PageContainer from '@/app/components/container/PageContainer';

function HeaderCustom({children, title, activeItem, menu}) {

  const params = useParams();
  const url = useMemo(() => {
    return `/reports`;
  }, [params?.uid]);

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      // to: `${url}`,
      title: "Reports.title",
    },
    // {
    //   ...(activeItem ? {to: `${url}/${params?.uid}`} : {}),
    //   title: params?.uid,
    // },
    // ...(activeItem ? [{
    //   title: activeItem
    // }] : [])
  ];

  return (
    <PageContainer title={title} description="">
      <Breadcrumb title={title} items={BCrumb} />


      <TopMenu />
      <Box sx={{
        padding: "14px",
        gap:3,
        display:"flex",
        // flexDirection: "column",
        // justifyContent: "stretch"
      }}>
        {menu && <InnerMenu
          items={menu}
        />}

        <Box sx={{flex: 1}}>
          {children}
        </Box>
      </Box>

    </PageContainer>
  );
}

export default memo(HeaderCustom);
