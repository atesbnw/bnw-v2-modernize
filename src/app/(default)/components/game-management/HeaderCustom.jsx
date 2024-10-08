"use client";
import React, { memo, useMemo, Fragment} from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import { t } from 'i18next';
import Box from '@mui/material/Box';
import InnerMenu from '@/app/components/InnerMenu';
import { uniqueId } from 'lodash';
import { useParams } from 'next/navigation';
import PageContainer from '@/app/components/container/PageContainer';

function HeaderCustom({children, title, activeItem, menu}) {

  const params = useParams();
  const url = useMemo(() => {
    return `/game-management`;
  }, [params?.uid]);

  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `${url}`,
      title: "menu.Game Management.title",
    },
      ...(params?.uid ? [{
      ...((activeItem && params?.uid) ? {to: `${url}/${params?.uid}`} : {}),
      title: params?.uid,
    }] : []),
    ...((activeItem ) ? [{
      title: activeItem
    }] : [])
  ];

  return (
    <PageContainer title={title} description="">
      <Breadcrumb title={title} items={BCrumb} />


      {/*<TopMenu />*/}
      <Box sx={{
        pt:2,
        gap:3,
        display:"flex",
        // flexDirection: "column",
        // justifyContent: "stretch"
      }}>
        <InnerMenu
          items={menu}
        />

        <Box sx={{flex: 1}}>
          {children}
        </Box>
      </Box>

    </PageContainer>
  );
}

export default memo(HeaderCustom);
