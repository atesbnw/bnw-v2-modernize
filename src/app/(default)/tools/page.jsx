"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import { t } from 'i18next';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderCustom from '@/app/(default)/components/users/HeaderCustom';
import TitleBar from '@/app/components/TitleBar';


function Page() {
  const params = useParams();


  return (
    <Fragment>

      <TitleBar
         title={t("Tools.title")}
        />

</Fragment>
  );
}

export default memo(Page);
