import PageContainer from '@/app/components/container/PageContainer';
import { t } from 'i18next';
import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import HeaderCustom from '@/app/(default)/components/users/HeaderCustom';

function Layout({children}) {
  // const params = useParams();


  return (
    <PageContainer title={t("Users.bc.User Details")} description="">

      <HeaderCustom>
        {children}
      </HeaderCustom>

    </PageContainer>
  );
}

export default Layout;
