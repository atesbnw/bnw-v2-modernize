"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import DataTable from '@/app/components/shared/DataTable';
import { useUsers } from '@/app/(default)/users/useUsers';

function Page() {
  const BCrumb = [
    {
      to: '/',
      title: "menu.Home",
    },
    {
      to: `/users`,
      title: "Users.bc.User Management",
    }
    ];
  const {users} = useUsers();

  return (
    <PageContainer title={t("Users.bc.User Management")} description="" style={{
      flex: 1,
      maxWidth: "80vw",
      overflowX: "auto"
    }}>
      <Breadcrumb title={t("Users.bc.User Management")} items={BCrumb} />

      <DataTable
        data={users}
      />

    </PageContainer>
  );
}

export default Page;
