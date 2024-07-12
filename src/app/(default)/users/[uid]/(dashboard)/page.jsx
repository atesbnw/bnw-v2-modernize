"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import { t } from 'i18next';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderCustom from '@/app/(default)/components/users/HeaderCustom';


function Page() {
  const params = useParams();


  return (
    <Fragment>


        <Box>
          {/*<Typography variant="h6" component="div">{t('menu.Users.Financial Transactions')}</Typography>*/}
          <Typography variant="h6" component="div">{params?.uid}</Typography>
        </Box>

</Fragment>
  );
}

export default memo(Page);
