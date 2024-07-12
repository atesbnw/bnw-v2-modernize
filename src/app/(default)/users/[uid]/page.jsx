"use client";
import React, { memo, useState, useCallback, useMemo, Fragment } from 'react';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import { t } from 'i18next';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InnerMenu from '@/app/components/InnerMenu';
import { uniqueId } from 'lodash';


function Page() {
  const params = useParams();
  const url = useMemo(() => {
    return `/users/${params?.uid}`;
  }, [params?.uid]);

  // "Personal Information": "Personal Information",
  //   "Account Info":"Account Info",
  //   "Contact Info": "Contact Info",
  //   "State and Role's": "State and Role's",
  //   "Privacy Info": "Privacy Info",
  //   "Notes": "Notes",
  //   "Messages": "Messages",
  //   "Documents": "Info and Documents"

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
