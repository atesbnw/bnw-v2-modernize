"use client";
import { t } from 'i18next';
import Breadcrumb from '@/app/base/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ProductTableList from '@/app/components/apps/ecommerce/ProductTableList/ProductTableList';

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

  return (
    <PageContainer title={t("Users.bc.User Management")} description="">
      <Breadcrumb title={t("Users.bc.User Management")} items={BCrumb} />

      <ProductTableList />

    </PageContainer>
  );
}

export default Page;
